import BlogLayout from "./Routes/Layout/BlogLayout.jsx";
import Error from "./Routes/Error.jsx";
import EverFooter from "./components/EverFooter/EverFooter.jsx";
import EverHeader from "./components/EverHeader/EverHeader.jsx";
import Health from "./Routes/Health/Health";
import Home from "./Routes/Home/Home";
import LifeStyle from "./Routes/Lifestyle/Lifestyle";
import Money from "./Routes/Money/Money";
import News from "./Routes/News/News";
import Relationship from "./Routes/Relationship/Relationship";
import ScrollToTop from "./components/ScrollToTop.js";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <EverHeader />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health" element={<Health />} />
          <Route path="/lifestyle" element={<LifeStyle />} />
          <Route path="/making-money-online" element={<Money />} />
          <Route path="/news" element={<News />} />
          <Route path="/relationship" element={<Relationship />} />
          <Route path="post/:slug" element={<BlogLayout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <EverFooter />
    </ChakraProvider>
  );
}

export default App;
