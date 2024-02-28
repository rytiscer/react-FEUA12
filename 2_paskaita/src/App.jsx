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
import Hero from "./components/Hero";
import Content from "./components/Content";
import "./index.css";

function App() {
  return (
    <div>
      <Hero
        title="Title"
        text="Some about text"
        text2="in two lines"
        btnText="Button"
      />
      <Content
        title="Portfolio"
        pText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </div>
  );
}

export default App;
