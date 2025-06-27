import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exac path="/" element={<HomePage />} />
          <Route exac path="/categories/:idc" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
