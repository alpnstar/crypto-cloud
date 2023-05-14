import './header.scss';
import React from 'react';

export default function Header(props) {
    return (
        <header className='header'>
            <div className="header__wrapper container">
                <div className="header__logo-wrapper">
                    <span className="header__logo">
                        <img src='https://dummyimage.com/195x30.jpg?text=Cryptonic' alt='' />
                    </span>
                </div>
                <div className="header__lang-selector">
                    <span>
                        RU
                    </span>
                </div>
            </div>
        </header>
    )
}