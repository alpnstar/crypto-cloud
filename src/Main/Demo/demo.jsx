import './demo.scss';
import React, { useState } from 'react';
import EmailForm from './EmailForm/email-form.jsx'
import QRCode from 'react-qr-code';
export default function Demo(props) {

    const [buttonState, setButtonState] = useState({
        buttonDisabled: false,
        step: 1,
    });
    function buttonState_handleButtonDisabled(data) {
        setButtonState(prevState => {
            return (
                {
                    ...prevState,
                    buttonDisabled: data,
                }
            )
        })
    };
    function buttonState_handleNextStep() {
        setButtonState(prevState => {
            if (buttonState.step != 3) {
                return (
                    {
                        ...prevState,
                        step: prevState.step + 1,
                    }
                )
            }
            return '';
        })
    }

    const [emailFormDisabled, setEmailFormDisabled] = useState(false);
    const handleSetEmailFormDisabled = () => {
        if (emailFormDisabled == false) {
            buttonState_handleButtonDisabled(true);
        } else {
            buttonState_handleButtonDisabled(false);
        }
        setEmailFormDisabled(!emailFormDisabled);
    };

    const [addressInput, setAddressInput] = useState('{address}')
    return (
        <div className="demo">
            <div className="demo__wrapper container">
                <div className="demo__block-1">
                    {
                        buttonState.step == 1 ?
                            <div className="demo__method">
                                <h3 className='main-title'>
                                    Выберите способ оплаты
                                </h3>
                                <div className="demo__method-currency">
                                    <div className="demo__method-currency-title">
                                        <img src='https://dummyimage.com/32x32.jpg?text=curIcon' alt='' />
                                        <span className="demo__method-currency-title-title">{'{title}'}</span>
                                    </div>
                                    <div className="demo__method-currency-info">
                                        <span className="demo__method-currency-price">{'{to-pay}'}</span>
                                        <span className="demo__method-currency-chain-system">{'{bcSys}'}</span>
                                    </div>
                                </div>
                            </div>
                            : buttonState.step == 2 ?
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
                                            </div>
                                            <div className='main-input-wrapper'>
                                                <legend>Адрес</legend>
                                                <input className='requisites__address'
                                                    disabled
                                                    value={addressInput} />
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
                                : <span>step 3</span>
                    }
                    {
                        buttonState.step == 1 &&
                        <EmailForm
                            emailFormDisabled={emailFormDisabled}
                            handleSetEmailFormDisabled={handleSetEmailFormDisabled}
                            buttonState_handleButtonDisabled={buttonState_handleButtonDisabled} />
                    }
                </div>
                <div className="demo__block-2">
                    <div className="demo__inv-time">
                        <div className="demo__inv-time-title">{'{inv-name}'}</div>
                        <div className="demo__inv-time-text">Счет истекает через: {'{inv-time}'}</div>
                    </div>
                    <div className="demo__total">
                        <div className="demo__total-title">
                            <h2 className='demo__total-name'>{'{project-name}'}</h2>
                            <span className="demo__inv-time-title demo__inv-time-title--alt">
                                {'{inv-name}'}
                            </span>
                        </div>
                        <div className="demo__details">
                            <div className='demo__details-total'>
                                <span>Итого</span>
                                <span>{'{price}'}</span>
                            </div>
                            <span className='demo__details-commission'></span>
                            <span className='demo__details-full-total'></span>
                            <div className="demo__details-button-wrapper">
                                <button
                                    disabled={buttonState.buttonDisabled}
                                    onClick={buttonState_handleNextStep}
                                    className="demo__details-button">Оплатить</button>
                            </div>
                            <span className="demo__details-note">Нажимая «Оплатить», вы принимаете пользовательское соглашение.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}