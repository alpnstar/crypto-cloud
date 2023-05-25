import React, { useState } from 'react';

export default function EmailForm(props) {
    const handleSetEmailFormDisabled = () => {
        if (props.emailFormDisabled == false) {
            props.buttonState_handleButtonDisabled(true);
        } else {
            props.buttonState_handleButtonDisabled(false);
        }
        props.setEmailFormDisabled(!props.emailFormDisabled);
    };

    return (
        <div className="demo__notification">
            <div className='demo__notification-text'>
                <div className={`slider ${props.emailFormDisabled ? "slider--on" : ""}`}>
                    <label htmlFor="slider-input" className="slider__label">
                        <input
                            type="checkbox"
                            className="slider__input"
                            id="slider-input"
                            checked={props.emailFormDisabled}
                            onChange={handleSetEmailFormDisabled}
                        />
                        <div className="slider__track">
                            <div className="slider__thumb"></div>
                        </div>
                    </label>
                </div>
                <label htmlFor="slider-input">
                    Отправить уведомление <span className="demo__notification-text--hidden">на почту</span>
                </label>
            </div>
            {props.emailFormDisabled &&
                <form id='email-form' className='main-input-wrapper'>
                    <legend>E-mail</legend>
                    <input
                        onChange={event => {
                            const regTemp = /^[\w\.-]+@[\w\.-]+\.\w{2,4}$/;
                            if (regTemp.test(event.target.value)) {
                                props.buttonState_handleButtonDisabled(false);
                            } else {
                                props.buttonState_handleButtonDisabled(true);
                            }
                        }}
                        type='email'
                        placeholder='longemail1476@domail.com' />
                </form>
            }
        </div>
    )
}
