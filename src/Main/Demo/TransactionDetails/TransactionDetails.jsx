import React, { useState } from 'react';
import TransactionDetailsInputs from './TransactionDetailsInputs.jsx';
import MethodCurrency from '../Method/MethodCurrency.jsx';
import TransactionStatus from './TransactionStatus/TransactionStatus.jsx';

export default function TransactionDetails(props) {
    const [transactionStatusState, setTransactionStatusState] = useState(1);
    function setTransactionStatusStateHandle() {
        if (transactionStatusState < 3) {
            setTransactionStatusState(transactionStatusState + 1)
        }
    }

    return (
        <>
            <TransactionStatus
                transactionStatusState={transactionStatusState}
                setTransactionStatusStateHandle={setTransactionStatusStateHandle}
                setMainStateHandle={props.setMainStateHandle}
            />
            <div className="demo__transactionDetails">
                <h3 className='main-title'>Детали транзакции</h3>
                <MethodCurrency />
                <TransactionDetailsInputs
                    mainState={props.mainState}
                    addressInput={props.addressInput}
                />
            </div>
        </>
    )
}

