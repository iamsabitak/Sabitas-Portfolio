import { HeaderMenu } from "./components/HeaderMenu";
import Home from "./components/Home";
import { Fragment } from "react/jsx-runtime";

const App = () => {
  return (
    <Fragment>
      <HeaderMenu />
      <Home />
    </Fragment>
  );
};

export default App;
