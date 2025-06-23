import "/css/app.css?url";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exac path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
