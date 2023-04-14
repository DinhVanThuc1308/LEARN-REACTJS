import React,{useContext} from "react";
import {MyAppContext} from "../../MyApp";

export default function React.memo(function HelloWorld({onMessageClick}) {
    const context = useContext(MyAppContext);
    console.log(context.isLogin);
    return <div></div>
    
}) 