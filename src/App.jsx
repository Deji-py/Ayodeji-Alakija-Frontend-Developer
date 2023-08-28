import LandingPage from "./Pages/LandingPage/LandingPage";
import SpaceXDataProvider from "./context/SpaceXData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <SpaceXDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </SpaceXDataProvider>
  );
}

export default App;
