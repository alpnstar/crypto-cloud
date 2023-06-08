import React, { useEffect, useState } from 'react';
import loadingIcon from '../../../../public/imgs/loader_accent.ede5cf0.svg';

export default function TransactionStatus(props) {
    return (
        <div className="demo__transactionStatus">
            <img src={loadingIcon} alt="" />
            <div className="demo__transactionStatus-content">
                <h2>Ищем транзакцию в сети Blockchain</h2>
                <span className="demo__transactionStatus-note">
                    Обычно транзакции выходят в сеть в течение 15 минут…
                </span>
            </div>
        </div>
    )
}

