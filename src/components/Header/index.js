import React from 'react';
import { Link } from 'react-router-dom'

import './styles.scss';

import Logo from '../../assets/logo-single-dark.svg'

const Header = props => {
    return (
        <header className="main-header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="callToActions">
                    <Link to="/registration">
                        Register
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
