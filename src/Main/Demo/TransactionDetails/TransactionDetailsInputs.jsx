import React, { useEffect, useState } from 'react';

export default function TransactionDetailsInputs(props) {
    return (
        <>
            {props.buttonState.step == 4 &&
                <div className='main-input-wrapper'>
                    <legend>Дата</legend>
                    <input
                        disabled
                        value={'{date}'} />
                    <span className='main-input-copy-icon'></span>
                </div>
            }
            <div className='main-input-wrapper'>
                <legend>Сумма</legend>
                <input
                    disabled
                    value={'{value}'} />
                <span className='main-input-copy-icon'></span>
            </div>
            <div className='main-input-wrapper'>
                <legend>Адрес</legend>
                <input className='requisites__address'
                    disabled
                    value={props.addressInput} />
                <span className='main-input-copy-icon'></span>
            </div>
            <div className='main-input-wrapper'>
                <legend>Сеть</legend>
                <input
                    disabled
                    value={'{net}'} />
            </div>
        </>
    )
}

