import Users from "./components/Users";
import Photos from "./components/Photos";
import "./App.css";

const App = () => {
  return (
    <div>
      <div>
        <h1>Users:</h1>
        <Users />
      </div>
      <div>
        <h1>Photos</h1>
        <Photos />
      </div>
    </div>
  );
};

export default App;
