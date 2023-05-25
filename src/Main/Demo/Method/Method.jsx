import React, { useState } from 'react';

export default function Method(props) {
    return (
        <div className="demo__method">
            <h3 className='main-title'>
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
    )
}
