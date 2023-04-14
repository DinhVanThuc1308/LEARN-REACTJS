import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import NewsPaHomePage from "./pages/News";
import ContactPaHomePage from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPaHomePage />} />
        <Route path="/contact" element={<ContactPaHomePage />} />
      </Routes>
    </div>
  );
}

export default App;
