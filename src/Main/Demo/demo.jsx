import './demo.scss';
import React, { useState } from 'react';
import EmailForm from './EmailForm/email-form.jsx'
import Requisites from './Requisites/Requisites.jsx';
import Method from './Method/Method.jsx';
import TransactionDetails from './TransactionDetails/TransactionDetails.jsx';
import TransactionStatus from './TransactionStatus/TransactionStatus.jsx';

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
            if (buttonState.step != 4) {
                return (
                    {
                        ...prevState,
                        step: prevState.step + 1,
                    }
                )
            }
            return (
                {
                    ...prevState,
                    step: 1,
                }
            );
        })
    }

    const [emailFormDisabled, setEmailFormDisabled] = useState(false);
    const [addressInput, setAddressInput] = useState('{address}');

    return (
        <div className="demo">
            <div className="demo__wrapper container">
                <div className="demo__block-1">
                    <TransactionStatus />

                    {
                        buttonState.step == 1 ?
                            <Method />
                            : buttonState.step == 2 ?
                                <Requisites buttonState={buttonState}
                                    addressInput={addressInput}
                                />
                                : buttonState.step == 3 || buttonState.step == 4 ?
                                    <TransactionDetails
                                        buttonState={buttonState}
                                        addressInput={addressInput}
                                    />
                                    : ''
                    }
                    {
                        buttonState.step == 1 &&
                        <EmailForm
                            emailFormDisabled={emailFormDisabled}
                            setEmailFormDisabled={setEmailFormDisabled}
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
                            {buttonState.step != 4 &&
                                <div className={`demo__details-total ${buttonState.step != 1 ? 'demo__details-total--step-2' : ''}`}>
                                    <div className="demo__details-total-total total-big">
                                        <span>Итого</span>
                                        <span>{'{Total}'}</span>
                                    </div>
                                    {
                                        buttonState.step != 1 &&
                                        <>
                                            <div className='demo__details-commission total-small'>
                                                <span>Технический сбор</span>
                                                <span>{'{commision}'}</span>
                                            </div>
                                            <div className='demo__details-full-total total-big'>
                                                <span>Итого:</span>
                                                <span>{'{fullTotal}'}</span>
                                            </div>

                                        </>
                                    }
                                </div>
                            }
                            <div className="demo__details-button-wrapper">
                                <button
                                    form={emailFormDisabled ? 'my-form' : ''}
                                    disabled={buttonState.buttonDisabled}
                                    onClick={buttonState_handleNextStep}
                                    className="demo__details-button">
                                    {
                                        buttonState.step == 1 ?
                                            'Оплатить' :
                                            buttonState.step == 2 ?
                                                'Я оплатил' :
                                                buttonState.step == 4 ?
                                                    'Вернуться на сайт'
                                                    : 'Далее'
                                    }
                                </button>
                            </div>
                            <span className="demo__details-note">Нажимая «Оплатить», вы принимаете пользовательское соглашение.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}