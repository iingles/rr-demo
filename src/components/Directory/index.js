import React from 'react';

import ShopMen from '../../assets/content-images/mens-clothing.jpg';
import ShopWomen from '../../assets/content-images/womens-clothing.jpg';

import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap d-flex">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopWomen})`
                    }}
                >
                    <a href="">Shop Women's</a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopMen})`
                    }}
                >
                    <a href="">Shop Men's</a>
                </div>
            </div>        
        </div>
    );
};

export default Directory;