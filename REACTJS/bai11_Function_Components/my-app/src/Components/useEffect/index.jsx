import React,{useEffect} from "react";
export default function UseEffect() {
    useEffect(() => {
        console.log("useEffect");
    });

    return <button>Click</button>;
    }