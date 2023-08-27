import LandingPage from "./Pages/LandingPage/LandingPage";
import SearchProvider from "./context/SearchContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
