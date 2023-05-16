import React, { useState } from 'react';

export default function EmailForm(props) {
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
                            onChange={props.handleSetEmailFormDisabled}
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
                <form className='demo__notification-form'>
                    <legend>E-mail</legend>
                    <input
                        onChange={(event) => {
                            const regTemp = /^[\w\.-]+@[\w\.-]+\.\w{2,4}$/;
                            if (regTemp.test(event.target.value)) {
                                props.setButtonState(false);
                            } else {
                                props.setButtonState(true);
                            }
                        }}
                        type='email'
                        placeholder='longemail1476@domail.com' />
                </form>
            }
        </div>
    )
}
