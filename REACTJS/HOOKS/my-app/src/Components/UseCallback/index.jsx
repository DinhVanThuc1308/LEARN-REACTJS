import React,{useCallback, useState} from 'react';
import Content from './content.jsx';
function TestUseCallback (){
    const [count, setCount] = useState(0);
    const handleIcrease = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    },[])
    return(
        <div>
        <Content onIncrease={handleIcrease}/>
        <h1>{count}</h1>
        </div>
    )


}
export default TestUseCallback;