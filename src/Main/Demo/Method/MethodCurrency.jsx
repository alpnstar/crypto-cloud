import React, { useState } from 'react';

export default function MethodCurrency(props) {
    return (
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
    )
}
