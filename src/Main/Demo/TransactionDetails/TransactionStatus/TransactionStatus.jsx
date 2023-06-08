import React, { useState, useEffect } from 'react';
import loadingIcon from '../../../../../public/imgs/loader_accent.ede5cf0.svg';
import transactionSuccessIcon from '../../../../../public/imgs/transactionSuccess.svg';

export default function TransactionStatus(props) {
    return (
        <>
            {
                props.transactionStatusState === 1 ?
                    <Search />
                    : props.transactionStatusState === 2 ?
                        <Finded />
                        : props.transactionStatusState === 3 ?
                            <Success buttonState_handleNextStep={props.buttonState_handleNextStep} />
                            : ''
            }
        </>
    )
}
function Search(props) {
    return (
        <div className="demo__transactionStatus demo__transactionStatus--loading">
            <img src={loadingIcon} alt="" />
            <div className="demo__transactionStatus-content">
                <h2>Ищем транзакцию в сети Blockchain</h2>
                <span className="demo__transactionStatus-note">
                    Обычно транзакции выходят в сеть в течение 15 минут…
                </span>
            </div>
        </div>
    )
}

function Finded(props) {
    return (
        <div className="demo__transactionStatus demo__transactionStatus--loading demo__transactionStatus--finded">
            <img src={loadingIcon} alt="" />
            <div className="demo__transactionStatus-content">
                <h2>Транзакция найдена! Ожидаем подтверждения.</h2>
            </div>
        </div>
    )
}
function Success(props) {
    useEffect(() => {
        props.buttonState_handleNextStep();
    
    }, [])
    return (
        <div className="demo__transactionStatus demo__transactionStatus--finded">
            <img src={transactionSuccessIcon} alt="" />
            <div className="demo__transactionStatus-content">
                <h2>Счёт успешно оплачен.</h2>
            </div>
        </div>
    )
}