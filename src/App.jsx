// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
