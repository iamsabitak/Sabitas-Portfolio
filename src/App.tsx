import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderMenu } from "./components/HeaderMenu";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
