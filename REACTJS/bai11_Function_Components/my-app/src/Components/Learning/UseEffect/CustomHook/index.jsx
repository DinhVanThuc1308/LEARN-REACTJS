import React, { useState } from 'react';
import useBoolean from './CustomHook'
function App() {
    const [isToggle,{
        setToggle,
        setTrue,
        setFalse,
    }] = useBoolean(false);

    return (
        <div className='container'>
            <button type="button" onClick={setToggle}>Toggle</button>
            <button type="button" onClick={setTrue}>True</button>
            <button type="button" onClick={setFalse}>False</button>
            {isToggle.toString()}
        </div>
    );
}
export default App;