import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LeaderboardPage from "./LeaderboardPage";
import ContestPage from "./ContestPage";
import ContestBracketPage from "./ContestBracketPage";
import ContestLeaderboardPage from "./ContestLeaderboardPage";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/contest" element={<ContestPage />} />
        <Route path="/contest/:contestId" element={<ContestBracketPage />} />
        <Route
          path="/contest/:contestId/leaderboard"
          element={<ContestLeaderboardPage />}
        />
        {/* You can add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
