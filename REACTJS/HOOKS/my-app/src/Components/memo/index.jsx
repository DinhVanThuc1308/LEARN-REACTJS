import {useState, memo} from 'react';
import Content from './content';
function TestMemo() {
    const [count, setCount] = useState(0);
    const increase= () =>{
        setCount(count+1);
    }
    return(
        <div>
            <Content count={count}/>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    )

}
export default TestMemo;