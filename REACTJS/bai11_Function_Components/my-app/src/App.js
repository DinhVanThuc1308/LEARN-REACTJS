// import logo from "./logo.svg";
import "./App.css";
// import { useEffect, useRef } from "react";
// import { useState } from "react";
// import Test from "./Components/Learning/UseEffect/CustomHook/index";
// import TH2 from "./Components/TH/TH2/index";
import Bai1 from "./Components/BT/BT1/index.jsx";
import Bai2 from "./Components/BT/BT2/index.jsx";

// import router from "./router.jsx";
// import { RouterProvider } from "react-router-dom";

function App() {
  // const inputRef = useRef(null);
  // const handleClick = () => {
  //   inputRef.current.focus();
  //   console.log(inputRef.current.value);
  // useEffect(() => {
  //   console.log("useEffect");
  // });
  // const [age, setAge] = useState(5);
  // const onChangeAge = () => {
  //   setAge(age + 1);
  // };

  // return (
  // <div className="App">
  //   <div className="th1">
  //     <Test />
  //     <h1>Thực hành 1</h1>
  //     <div>Tuổi là: {age}</div>
  //     <button onClick={onChangeAge}>Tăng tuổi</button>
  //   </div>
  //   <div className="th2">
  //     <h1>Thực hành 2</h1>
  //     <TH2 />
  //   </div>

  {
    /* <button onClick={() => console.log("click")}>click</button>
      <h1>Hello World</h1> */
  }
  {
    /* <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>focus</button> */
  }
  // </div>
  return (
    <div className="App">
      <Bai1 />
      <hr />
      <Bai2 />
    </div>

    //   <RouterProvider router={router}>

    // </RouterProvider>
  );
}

export default App;
