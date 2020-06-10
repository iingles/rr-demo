import React, { Component } from 'react';

import Buttons from '../Forms/Button';
import { signInWithGoogle } from '../../firebase/utils';

import './styles.scss';

class Signin extends Component {

    handleSubmit = async evt => {
        evt.preventDefault();        
    }


    render() {
        return (
            <div className="signin">
                <div className="wrap">
                    <h2>
                        Login
                    </h2>

                    <div className="formWrap">
                        <form onSubmit={ this.handleSubmit }>
                            <div className="socialSignin">
                                <div className="row">
                                    <Buttons onClick={ signInWithGoogle }>
                                        Sign in with Google
                                    </Buttons>
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