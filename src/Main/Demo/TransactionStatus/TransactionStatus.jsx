import React, { useEffect, useState } from 'react';

export default function TransactionStatus(props) {
    return (
        <div className="demo__transactionStatus">
            <img src="./imgs/loader_accent.ede5cf0.svg" alt="" />
            <div className="demo__transactionStatus-content">
                <h2>Ищем транзакцию в сети Blockchain</h2>
                <span className="demo__transactionStatus-note">
                    Обычно транзакции выходят в сеть в течение 15 минут…
                </span>
            </div>
        </div>
    )
}

