import React from 'react';
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/utils'

import './styles.scss';

import Logo from '../../assets/logo-single-dark.svg'

const Header = props => {

    const { currentUser } = props;

    return (
        <header className="main-header">
            <div className="wrap">

                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>

                <div className="callToActions">
                    
                    { currentUser && (
                        <button onClick={()=>auth.signOut()}>Logout</button>
                    )}

                    { !currentUser && (
                        <div>
                            <Link to="/registration">
                                Register
                            </Link>
                            <Link to="/login">
                                    Login
                            </Link>
                        </div>
                    )}

                    
                </div>
                
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;
