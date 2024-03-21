import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          gap: 16,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
    </>
  );
};

export default Topbar;
