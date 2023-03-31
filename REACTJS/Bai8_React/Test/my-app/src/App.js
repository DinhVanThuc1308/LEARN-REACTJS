import logo from "./logo.svg";
import "./App.css";

function App() {
  const todo = ["hello", "world"];
  return (
    // bài tập 1
    // const isUserLoggedIn = true;
    // return <h1>{isUserLoggedIn ? "Hello User" : "Hello Guest"}</h1>;

    //Bài tập 2
    //   <h1>
    //     {todo.map((item, index) => {
    //       return <p key={index}> {item}</p>;
    //     })}
    //   </h1>
    // );

    // // Thực hành 1

    // <div>Hello world</div>
    // Thực hành 2
    //   <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    //Thực hành 3
    // <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>

    //Thực hành 4
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
