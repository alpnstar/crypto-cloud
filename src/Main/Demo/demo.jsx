import './demo.scss';
import React, { useState } from 'react';
import EmailForm from './EmailForm/email-form.jsx'
import Requisites from './Requisites/Requisites.jsx';
import Method from './Method/Method.jsx';

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

    return (
        <div className="demo">
            <div className="demo__wrapper container">
                <div className="demo__block-1">
                    {
                        buttonState.step == 1 ?
                            <Method />
                            : buttonState.step == 2 ?
                                <Requisites />
                                : <span>step 3</span>
                    }
                    {
                        buttonState.step == 1 &&
                        <EmailForm
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
                            <div className={buttonState.step != 1 ? 'demo__details-total demo__details-total--step-2' : 'demo__details-total'}>
                                <div className="demo__details-total-total total-big">
                                    <span>Итого</span>
                                    <span>{'{Total}'}</span>
                                </div>
                                {buttonState.step == 2 &&
                                    <div className='demo__details-commission total-small'>
                                        <span>Технический сбор</span>
                                        <span>{'{commision}'}</span>
                                    </div>
                                }
                                {buttonState.step == 2 &&
                                    <div className='demo__details-full-total total-big'>
                                        <span>Итого:</span>
                                        <span>{'{fullTotal}'}</span>
                                    </div>
                                }

                            </div>

                            <div className="demo__details-button-wrapper">
                                <button
                                    disabled={buttonState.buttonDisabled}
                                    onClick={buttonState_handleNextStep}
                                    className="demo__details-button">
                                    {
                                        buttonState.step == 1 ?
                                            'Оплатить' :
                                            buttonState.step == 2 ?
                                                'Я оплатил' :
                                                'Далее'
                                    }
                                </button>
                            </div>
                            <span className="demo__details-note">Нажимая «Оплатить», вы принимаете пользовательское соглашение.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}