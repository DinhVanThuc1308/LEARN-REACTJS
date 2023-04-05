import logo from "./logo.svg";
import { useState } from "react";

import "./App.css";
import Bai1 from "./Component/Header/Header.jsx";
import Bai2 from "./Component/Header/bai2.jsx";
import Bai3 from "./Component/Header/bai3.jsx";
import Bai4 from "./Component/Header/bai4.jsx";
import { Header } from "./Component/Baitap/baitap1/Header.jsx";
import { Footer } from "./Component/Baitap/baitap1/Footer.jsx";
import { Body } from "./Component/Baitap/baitap1/body.jsx";
import { UserForm } from "./Component/Baitap/baitap2/UserForm.jsx";
import { Greeting } from "./Component/Baitap/baitap2/Greeting.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="App">
      <h1>TH 1</h1>
      <Bai1 />
      <hr></hr>
      <h1>Th 2</h1>
      <Bai2 />
      <h1>Day la Menu</h1>
      <h1>Day la Content</h1>
      <hr></hr>
      <h1>Th 3</h1>
      <Bai3 />
      <hr></hr>
      <h1>Th 4</h1>
      <Bai4 />
      <div className="Baitap1">
        <hr></hr>
        <h1>Bai tap 1</h1>
        <Header />
        <Footer />
        <Body />
      </div>
      <div className="Baitap2">
        <h1>Đây là bài tập 2</h1>
        <div>
          <label htmlFor="">Name</label>
          <UserForm onChange={handleChange}></UserForm>
          <Greeting>{inputValue}</Greeting>
        </div>
      </div>
    </div>
  );
}

export default App;
