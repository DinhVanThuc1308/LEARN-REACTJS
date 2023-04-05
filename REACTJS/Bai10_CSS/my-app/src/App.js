import logo from "./logo.svg";
import { ReactComponent as Logo2 } from "./logo.svg";
import "./App.css";
import meme from "./assets/image/meme.jpg";
import AppButton from "./components/Button/index.jsx";
function App() {
  return (
    <div className="App">
      <AppButton></AppButton>
      <img src={logo} />
      {/* <div className="image"></div> */}
      <Logo2/>
    </div>
  );
}

export default App;
