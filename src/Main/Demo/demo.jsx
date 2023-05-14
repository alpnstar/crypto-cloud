import './demo.scss';
import React from 'react';

export default function Demo(props) {
    return (
        <div className="demo">
            <div className="demo__wrapper container">
                <div className="demo__block-1">
                    <div className="demo__method">
                        <h3 className='demo__method-title'>
                            Выберите способ оплаты
                        </h3>
                        <div className="demo__method-currency">
                            <div className="demo__method-currency-title">
                                <img src='https://dummyimage.com/32x32.jpg?text=curIcon' alt='' />
                                <span className="demo__method-currency-title-title">{'{title}'}</span>
                            </div>
                            <div className="demo__method-currency-info">
                                <span className="demo__method-currency-price">{'{to-pay}'}</span>
                                <span className="demo__method-currency-chain-system">{'{bcSys}'}</span>
                            </div>
                        </div>

                    </div>
                    <div className="demo__notification">
                        <span className='demo__notification-text'>
                            Отправить уведомление <span className="demo__notification-text--hidden">на почту</span>
                        </span>
                    </div>
                </div>
                <div className="demo__block-2">
                    <div className="demo__inv-time">
                        <div className="demo__inv-time-title">{'{inv-name}'}</div>
                        <div className="demo__inv-time-text">Счет истекает через: {'{inv-time}'}</div>
                    </div>
                    <div className="demo__total">
                        <div className="demo__total-title">
                            <h2 className='demo__total-name'>{'{project-name}'}</h2>
                            <span className="demo__inv-time-title demo__inv-time-title--alt">
                                {'{inv-name}'}
                            </span>
                        </div>
                        <div className="demo__details">
                            <div className='demo__details-total'>
                                <span>Итого</span>
                                <span>{'{price}'}</span>
                            </div>
                            <span className='demo__details-commission'></span>
                            <span className='demo__details-full-total'></span>
                            <div className="demo__details-button-wrapper">
                                <button className="demo__details-button">Оплатить</button>
                            </div>
                            <span className="demo__details-note">Нажимая «Оплатить», вы принимаете пользовательское соглашение.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}