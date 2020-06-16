import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Button from '../../components/Forms/Button';
import FormInput from '../../components/Forms/FormInput';

import { auth } from './../../firebase/utils';

import './styles.scss'

const initialState = {
    email: '',
    errors: []
};

class Recovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        const { name, value } = evt.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async evt=> {
        evt.preventDefault();

        try {
            const { email } = this.state;

            const config = {
                url: 'http://localhost:3000/login'
            };

            await auth.sendPasswordResetEmail(email, config)
                .then(() => {
                    this.props.history.push('/login')
                }).catch(e => {
                    const err = ['Email not found'];
                    this.setState({
                        errors: err
                    });
                });

        } catch(err) {
            // console.error(err);
        }
    }

    render() {
        const { email, errors } = this.state;

        return (
            <div className="recoveryWrapper">
                {errors.length > 0 && (
                    <ul>
                        {errors.map((e, idx)=> {
                            return (
                                <li key={idx}>
                                    {e}
                                </li>
                            );
                        })}
                    </ul>
                )}
                <h1>Recover Password</h1>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <Button
                        type="submit"
                    >Email Password</Button>
                </form>
            </div>
        );
    }
}

export default withRouter(Recovery);