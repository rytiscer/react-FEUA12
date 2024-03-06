import "./App.css";
import "./index.css";
import HeroCAO1 from "./components/HeroCAO1";
import TaskCAO2 from "./components/TaskCAO2";

const App = () => {
  return (
    <TaskCAO2
      topTitle={"Title"}
      topText={"Some about text"}
      text={"in two lines"}
      btnText={"Button"}
      bottomTitle={"Portfolio"}
      pText={
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, velit dignissimos optio similique quaerat necessitatibus accusamus alias eveniet magni assumenda?"
      }
      imgText={"Image description"}
    />
  );
};

export default App;
