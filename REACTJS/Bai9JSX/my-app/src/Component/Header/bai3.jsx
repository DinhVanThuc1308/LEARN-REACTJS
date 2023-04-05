import React from 'react';
import { useState } from 'react';


const DemoComponent = (props) => {
    return (
        <div>
            <div>Day la tuoi: {props.age}</div>
            <div>Day la ten: {props.displayName}</div>

        </div>

    );
}

function Project3() {
    const [age, setAge] = useState(0);
    const [name, setName] = useState('Cee');

    const onIncreseAge = () => {
        setAge(age + 1);
    }

    return (
        <div className='container'>
            <div>{age}</div>
            <button onClick={onIncreseAge}>Tang age len 1</button>
            <DemoComponent age={age} displayName={name}></DemoComponent>
        </div>

    );
}

export default Project3;