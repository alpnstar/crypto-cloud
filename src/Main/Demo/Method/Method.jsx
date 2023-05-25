import React, { useState } from 'react';
import MethodCurrency from './MethodCurrency.jsx';

export default function Method(props) {
    return (
        <div className="demo__method">
            <h3 className='main-title'>
                Выберите способ оплаты
            </h3>
            <MethodCurrency />
        </div>
    )
}
