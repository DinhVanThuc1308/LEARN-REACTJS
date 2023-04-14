import React, { useState, useEffect } from 'react'
function DemNguoc (){
    const [countdown,setCountdown] = useState(180)
    useEffect(() => {
        const timer=setInterval(()=>
        {
            setCountdown(pre => pre -1)
        },100)
        return () => {
            clearInterval(timer)
        }
        
    },[])
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}
export default DemNguoc