import React, { useEffect } from 'react';
import QRCode from 'react-qr-code';
import TransactionDetailsInputs from '../TransactionDetails/TransactionDetailsInputs.jsx';


export default function Requisites(props) {
    useEffect(() => {
        document.querySelectorAll('.main-input-wrapper')
            .forEach((item, index, array) => {
                item.addEventListener('click', (event) => {
                    const parent = document.querySelectorAll('.main-input-wrapper')[index];
                    const value = parent.querySelector('input').value;
                    navigator.clipboard.writeText(value);
                })
            });
    }, [])
    return (
        <div className="demo__requisites">
            <div className="demo__requisites-wrapper">
                <div className="demo__requisites-header">
                    <div className="demo__requisites-qrcode-wrapper">
                        <QRCode className='demo__requisites-qrcode' value={props.addressInput} />
                    </div>
                    <div className="demo__requisites-title">
                        <span className="main-title">Реквизиты для оплаты</span>
                        <p className="demo__requisites-title-text">
                            Отправьте точную сумму по указанному адресу. После совершения оплаты нажмите на кнопку «Я оплатил» для проверки транзакции.
                        </p>
                    </div>
                </div>
                <div className="demo__requisites-details">
                    <TransactionDetailsInputs
                        mainState={props.mainState}
                        addressInput={props.addressInput}
                    />
                </div>
            </div>
        </div>

    )
}
