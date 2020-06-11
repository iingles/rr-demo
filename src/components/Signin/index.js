import React, { Component } from 'react';

import Button from '../Forms/Button';
import FormInput from '../Forms/FormImput';


import { signInWithGoogle, auth } from '../../firebase/utils';

import './styles.scss';

const initialState = {
    email: '',
    password: ''
};

class Signin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...initialState
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        const { name, value } = evt.target;
        
        this.setState({
            [name]: value
        });
    }   

    handleSubmit = async evt => {
        evt.preventDefault();        
        
        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialState
            });

        } catch (err) {
            // console.log(err)
        }
    }


    render() {
        const { email, password } = this.state;


        return (
            <div className="signin">
                <div className="wrap">
                    <h2>
                        Login
                    </h2>
                    <div className="formWrap">
                        <form onSubmit={ this.handleSubmit }>
                            <FormInput
                                name="email"
                                type="email"
                                value={email}
                                placeholder="Email"
                                handleChange={ this.handleChange }
                            />

                            <FormInput
                                name="password"
                                type="password"
                                value={password}
                                placeholder="Password"
                                handleChange={this.handleChange}
                            />

                            <Button
                                type="submit"
                            >
                                Log In
                            </Button>
                            <h2>or</h2> 
                            <div className="socialSignin">
                                <div className="row">
                                    <Button onClick={ signInWithGoogle }>
                                        Sign in with Google
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        )
    }

    
}

export default Signin;