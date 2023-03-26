// import logo from "./logo.svg";
import "./App.css";

function App() {
  const todo = ["hello", "world"];
  return (
    // bài 1
    // const isUserLoggedIn = true;
    // return <h1>{isUserLoggedIn ? "Hello User" : "Hello Guest"}</h1>;

    //Bài 2
    <h1>
      {todo.map((item, index) => {
        return <p key={index}> {item}</p>;
      })}
    </h1>
  );
}
export default App;
