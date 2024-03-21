import "./App.css";
import { Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar/Topbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Main from "./pages/Main/Main";
import User from "./pages/User/User";
import Users from "./pages/Users/Users";

const App = () => {
  return (
    <>
      <div>
        <Topbar />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
