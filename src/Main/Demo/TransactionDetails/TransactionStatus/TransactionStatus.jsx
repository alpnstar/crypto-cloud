import React, { useEffect, useState } from 'react';
import loadingIcon from '../../../../../public/imgs/loader_accent.ede5cf0.svg';
import transactionSuccessIcon from '../../../../../public/imgs/transactionSuccess.svg';

export default function TransactionStatus(props) {
    return (
        <>
            {
                props.transactionStatusState === 1 ?
                    <div className="demo__transactionStatus demo__transactionStatus--loading">
                        <img src={loadingIcon} alt="" />
                        <div className="demo__transactionStatus-content">
                            <h2>Ищем транзакцию в сети Blockchain</h2>
                            <span className="demo__transactionStatus-note">
                                Обычно транзакции выходят в сеть в течение 15 минут…
                            </span>
                        </div>
                    </div>
                    : props.transactionStatusState === 2 ?
                        <div className="demo__transactionStatus demo__transactionStatus--loading demo__transactionStatus--loading--finded">
                            <img src={loadingIcon} alt="" />
                            <div className="demo__transactionStatus-content">
                                <h2>Транзакция найдена! Ожидаем подтверждения.</h2>
                            </div>
                        </div>
                        : props.transactionStatusState === 3 ?
                            <div className="demo__transactionStatus demo__transactionStatus--loading demo__transactionStatus--loading--finded">
                                <img src={transactionSuccessIcon} alt="" />
                                <div className="demo__transactionStatus-content">
                                    <h2>Счёт успешно оплачен.</h2>
                                </div>
                            </div>
                            : '1'
            }
        </>
    )
}

