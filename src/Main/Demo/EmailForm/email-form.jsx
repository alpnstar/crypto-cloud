import React, { useState } from 'react';

export default function EmailForm(props) {
    return (
        <div className="demo__notification">
            <div className='demo__notification-text'>
                <div className={`slider ${props.get ? "slider--on" : ""}`}>
                    <label htmlFor="slider-input" className="slider__label">
                        <input
                            type="checkbox"
                            className="slider__input"
                            id="slider-input"
                            checked={props.get}
                            onChange={props.set}
                        />
                        <div className="slider__track">
                            <div className="slider__thumb"></div>
                        </div>
                    </label>
                </div>
                Отправить уведомление <span className="demo__notification-text--hidden">на почту</span>
            </div>
            {props.get && <input type="text" />}
        </div>
    )
}