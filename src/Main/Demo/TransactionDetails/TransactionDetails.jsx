import React, { useEffect, useState } from 'react';
import TransactionDetailsInputs from './TransactionDetailsInputs.jsx';
import MethodCurrency from '../Method/MethodCurrency.jsx';

export default function TransactionDetails(props) {
    return (
        <div className="demo__transactionDetails">
            <h3 className='main-title'>Детали транзакции</h3>
            <MethodCurrency />
            <TransactionDetailsInputs
                buttonState={props.buttonState}
                addressInput={props.addressInput}
            />
        </div>
    )
}

