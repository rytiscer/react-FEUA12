import ArrowFunctionWelcome from "./components/ArrowFunctionWelcome";
import ArrowFunctionWelcomeV2 from "./components/ArrowFunctionWelcomeV2";
import Card from "./components/Card";
import ClassWelcome from "./components/ClassWelcome";
import Welcome from "./components/Welcome";
import WelcomeDestructed from "./components/WelcomeDestructed";
import "./App.css";
import FuncButton from "./components/FuncButton";
import FuncDiv from "./components/FuncDiv";
import ClassDiv from "./components/ClassDiv";

function App() {
  return (
    <div>
      <FuncDiv h3Text="Some text" pText="random text" />
      <ClassDiv h3Text="Random random text" pText="bla bla bla" />
    </div>
  );
}

export default App;
