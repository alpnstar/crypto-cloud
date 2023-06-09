import React, { useState, useEffect, useRef } from 'react';
import loadingIcon from '../../../../../public/imgs/loader_accent.ede5cf0.svg';
import Success from './Success/Success.jsx';

export default function TransactionStatus(props) {
    return (
        <>
            {
                props.transactionStatusState === 1 ?
                    <Search handle={props.handle} />
                    : props.transactionStatusState === 2 ?
                        <Finded handle={props.handle} />
                        : props.transactionStatusState === 3 ?
                            <Success buttonState_handleNextStep={props.buttonState_handleNextStep} />
                            : ''
            }
        </>
    )
}
function Search(props) {
    let ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            ref.current && props.handle();
        }, 1500);
    }, [])

    return (
        <div ref={ref} className="demo__transactionStatus demo__transactionStatus--loading">
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
    let ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            ref.current && props.handle();
        }, 3100);
    }, [])

    return (
        <div ref={ref} className="demo__transactionStatus demo__transactionStatus--loading demo__transactionStatus--finded">
            <img src={loadingIcon} alt="" />
            <div className="demo__transactionStatus-content">
                <h2>Транзакция найдена! Ожидаем подтверждения.</h2>
            </div>
        </div>
    )
}