import React, { useState, useEffect } from 'react';
import transactionSuccessIcon from '../../../../../../public/imgs/transactionSuccess.svg';

export default function Success(props) {
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
