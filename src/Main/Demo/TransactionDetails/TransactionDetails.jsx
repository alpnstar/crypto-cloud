import React, { useState, useEffect } from 'react';
import TransactionDetailsInputs from './TransactionDetailsInputs.jsx';
import MethodCurrency from '../Method/MethodCurrency.jsx';
import TransactionStatus from './TransactionStatus/TransactionStatus.jsx';

export default function TransactionDetails(props) {
    const [transactionStatusState, setTransactionStatusState] = useState(1);
    function handle() {
        if (transactionStatusState < 3) {
            setTransactionStatusState(transactionStatusState + 1)
        }
    }

    return (
        <>
            <TransactionStatus
                transactionStatusState={transactionStatusState}
                handle={handle}
                buttonState_handleNextStep={props.buttonState_handleNextStep}
            />
            <div className="demo__transactionDetails">
                <h3 className='main-title'>Детали транзакции</h3>
                <button onClick={handle}>BUTTON CLICK</button>
                <MethodCurrency />
                <TransactionDetailsInputs
                    buttonState={props.buttonState}
                    addressInput={props.addressInput}
                />
            </div>
        </>
    )
}

