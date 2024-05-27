import About from "./components/About";
import { HeaderMenu } from "./components/HeaderMenu";
import Home from "./components/Home";
import { Fragment } from "react/jsx-runtime";
import Skills from "./components/Skills";

const App = () => {
  return (
    <Fragment>
      <HeaderMenu />
      <Home />
      <About />
      <Skills />
    </Fragment>
  );
};

export default App;
