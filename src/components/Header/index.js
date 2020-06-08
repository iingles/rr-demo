import React from 'react';
import './styles.scss';

import Logo from '../../assets/logo-single-dark.svg'

const Header = props => {
    return (
        <header className="main-header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </header>
    );
};

export default Header;
