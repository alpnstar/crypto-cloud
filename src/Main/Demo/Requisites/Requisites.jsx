import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';


export default function Requisites(props) {
    const [addressInput, setAddressInput] = useState('{address}');

    useEffect(() => {
        document.querySelectorAll('.main-input-wrapper').forEach((item, index, array) => {
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
                        <QRCode className='demo__requisites-qrcode' value={addressInput} />
                    </div>
                    <div className="demo__requisites-title">
                        <span className="main-title">Реквизиты для оплаты</span>
                        <p className="demo__requisites-title-text">
                            Отправьте точную сумму по указанному адресу. После совершения оплаты нажмите на кнопку «Я оплатил» для проверки транзакции.
                        </p>
                    </div>
                </div>
                <div className="demo__requisites-details">
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
                            value={addressInput} />
                        <span className='main-input-copy-icon'></span>
                    </div>
                    <div className='main-input-wrapper'>
                        <legend>Сеть</legend>
                        <input
                            disabled
                            value={'{net}'} />
                    </div>
                </div>
            </div>
        </div>

    )
}
