import { useRef, useState,useEffect } from "react";
function TestUseRef() {
    const [count, setCount] = useState(60);
    const timerId=  useRef()
    const prevCount = useRef();
    useEffect(() => {
        prevCount.current = count;
        
    }, [count])
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
            console.log(timerId.current);
        }, 1000);
    }
    const handleStop = () => {
        clearInterval(timerId.current);
        console.log(timerId.current);
    }
    console.log(count, prevCount.current);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}> Start</button>
            <button onClick={handleStop}> Stop</button>
        </div>
    );
}
export default TestUseRef;