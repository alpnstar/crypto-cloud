import React, { useState, useEffect } from 'react';
import TransactionDetailsInputs from './TransactionDetailsInputs.jsx';
import MethodCurrency from '../Method/MethodCurrency.jsx';
import TransactionStatus from './TransactionStatus/TransactionStatus.jsx';

export default function TransactionDetails(props) {
    const [transactionStatusState, setTransactionStatusState] = useState(1);
    useEffect(() => {
        (function () {
            setTimeout(() => {
                setTransactionStatusState(transactionStatusState + 1);
            }, 1500);
            setTimeout(() => {
                setTransactionStatusState(transactionStatusState + 1);
            }, 1500);

        })()
    })
    return (
        <>
            <TransactionStatus
                transactionStatusState={transactionStatusState}
                buttonState_handleNextStep={props.buttonState_handleNextStep}
                setTransactionStatusState={setTransactionStatusState} />
            <div className="demo__transactionDetails">
                <h3 className='main-title'>Детали транзакции</h3>
                <MethodCurrency />
                <TransactionDetailsInputs
                    buttonState={props.buttonState}
                    addressInput={props.addressInput}
                />
            </div>
        </>
    )
}

