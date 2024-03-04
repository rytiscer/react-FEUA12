import "./App.css";
import "./index.css";
import Card from "./components/Card";
import lizard from "./assets/lizard.jpg";
import Avatar from "./components/Avatar";

const App = () => {
  return (
    <div>
      <div className="firstTask">
        <div className="lizardOne">
          <Card
            imageUrl={lizard}
            title={"Lizard"}
            subtitle={
              "Lizards are widespread group of squamate reptiles, with over 6k species, ranging across all continents except Antarctica"
            }
          />
        </div>
        <div className="lizardTwo">
          <Card
            imageUrl={lizard}
            title={"Lizard"}
            subtitle={
              "Lizards are widespread group of squamate reptiles, with over 6k species, ranging across all continents except Antarctica"
            }
          />
        </div>
      </div>
      <div
        className="secondTask
    "
      >
        <Avatar name={"Rytis Cerniauskas"} />
      </div>
    </div>
  );
};

export default App;
