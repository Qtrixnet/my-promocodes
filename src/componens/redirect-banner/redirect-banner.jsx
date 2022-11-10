import React from 'react';
import './redirect-banner.scss';

const RedirectBanner = () => {
    return (
        <div className="banner">
            <h2 className="banner__title">Распродажа<br/>11.11</h2>
            <a href="/promo" className="banner__link">К товарам!</a>
        </div>
    );
};

export default RedirectBanner;
