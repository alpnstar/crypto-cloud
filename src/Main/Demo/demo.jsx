import './demo.scss';
import React, { useState } from 'react';
import EmailForm from './EmailForm/email-form.jsx'
import Requisites from './Requisites/Requisites.jsx';
import Method from './Method/Method.jsx';
import TransactionDetails from './TransactionDetails/TransactionDetails.jsx';

export default function Demo(props) {
    const
        [mainState, setMainState] = useState(1),
        [buttonState, setButtonState] = useState(false),
        [emailFormDisabled, setEmailFormDisabled] = useState(false),
        [addressInput, setAddressInput] = useState('{address}');

    function setButtonStateHandle() {
        setButtonState(!buttonState);
    };

    function setMainStateHandle() {
        setButtonState(() => {
            if (mainState != 4) return setMainState(mainState + 1);
            setMainState(1);
        })
    }

    return (
        <div className="demo">
            <div className="demo__wrapper container">
                <div className="demo__block-1">
                    {
                        mainState == 1 ?
                            <Method />
                            : mainState == 2 ?
                                <Requisites
                                    mainState={mainState}
                                    addressInput={addressInput}
                                />
                                : mainState == 3 || mainState == 4 ?
                                    <TransactionDetails
                                        mainState={mainState}
                                        setMainStateHandle={setMainStateHandle}
                                        addressInput={addressInput}
                                    />
                                    : ''
                    }
                    {
                        mainState == 1 &&
                        <EmailForm
                            emailFormDisabled={emailFormDisabled}
                            setEmailFormDisabled={setEmailFormDisabled}
                            setButtonStateHandle={setButtonStateHandle}
                        />
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
                            {mainState != 4 &&
                                <div className={`demo__details-total ${mainState != 1 ? 'demo__details-total--step-2' : ''}`}>
                                    <div className="demo__details-total-total total-big">
                                        <span>Итого</span>
                                        <span>{'{Total}'}</span>
                                    </div>
                                    {
                                        mainState != 1 &&
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
                                    disabled={buttonState}
                                    onClick={setMainStateHandle}
                                    className="demo__details-button">
                                    {
                                        mainState == 1 ?
                                            'Оплатить' :
                                            mainState == 2 ?
                                                'Я оплатил' :
                                                mainState == 3 ?
                                                    'Далее'
                                                    : 'Вернуться на сайт'
                                    }
                                </button>
                            </div>
                            <span className="demo__details-note">
                                Нажимая «Оплатить», вы принимаете пользовательское соглашение.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}