import React, { useState } from 'react';
const useBoolean = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const setTrue = () => setState(true);
    const setFalse = () => setState(false);
    const toggle = () => setState(!state);
    return [state,
        {
            setTrue, setFalse, toggle
        }];
}
export default useBoolean;