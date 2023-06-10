import React, { useEffect, useRef } from 'react';
import loadingIcon from '../../../../../public/imgs/loader_accent.ede5cf0.svg';
import transactionSuccessIcon from '../../../../../public/imgs/transactionSuccess.svg';

export default function TransactionStatus(props) {
    return (
        <>
            {
                props.transactionStatusState === 1 ?
                    <Search setTransactionStatusStateHandle={props.setTransactionStatusStateHandle} />
                    : props.transactionStatusState === 2 ?
                        <Finded setTransactionStatusStateHandle={props.setTransactionStatusStateHandle} />
                        : props.transactionStatusState === 3 ?
                            <Success setMainStateHandle={props.setMainStateHandle} />
                            : ''
            }
        </>
    )
}
function Search(props) {
    let ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            ref.current &&
                props.setTransactionStatusStateHandle();
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
            ref.current && props.setTransactionStatusStateHandle();
        }, 3100);
    }, [])

    return (
        <div ref={ref}
            className="demo__transactionStatus demo__transactionStatus--loading demo__transactionStatus--finded">
            <img src={loadingIcon} alt="" />
            <div className="demo__transactionStatus-content">
                <h2>Транзакция найдена! Ожидаем подтверждения.</h2>
            </div>
        </div>
    )
}

function Success(props) {
    useEffect(() => {
        props.setMainStateHandle();
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
