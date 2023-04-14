import React, { useState } from 'react';
function Bai1() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [sum, setSum] = useState('');
    const [mutil, setMutil] = useState('');
    const hanldeSum = () => {
        setSum(number1 + number2);
    }
    const hanldeMutil = () => {
        setMutil(number1 * number2);
    }


    return (
        <div>
            <h1>Bài 1</h1>
            <input type="number" value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
            <br />
            <input type="number" value={number2} onChange={(e) => setNumber2(Number(e.target.value))} />
            <br />

            <button onClick={hanldeSum}>Tổng</button>
            <br />

            <button onClick={hanldeMutil}>Tích</button>
            <br />
            <p>Tổng: {sum}</p>
            <p>Tích: {mutil}</p>
        </div>
    )

}
export default Bai1;