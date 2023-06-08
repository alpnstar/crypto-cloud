import React, { useEffect, useState } from 'react';
import TransactionDetailsInputs from './TransactionDetailsInputs.jsx';
import MethodCurrency from '../Method/MethodCurrency.jsx';
import TransactionStatus from './TransactionStatus/TransactionStatus.jsx';

export default function TransactionDetails(props) {
    const [transactionStatusState, setTransactionStatusState] = useState(1);
    function handle() {
    }
    let interval = setInterval(() => {
        if (transactionStatusState === 3) return clearInterval(interval);
        setTransactionStatusState(transactionStatusState + 1);

    }, 2000)
    return (
        <>
            <TransactionStatus
                transactionStatusState={transactionStatusState}
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

