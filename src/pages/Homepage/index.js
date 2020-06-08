import React from 'react';

import './styles.scss';
import Directory from './../../components/Directory';

const Homepage = props => {
    return (
        <section class="jumbotron">
            <div class="container">
                <Directory />
            </div>
        </section>
    );
};

export default Homepage;