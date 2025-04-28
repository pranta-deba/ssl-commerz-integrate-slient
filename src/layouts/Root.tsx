import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <h1>footer</h1>
    </div>
  );
};

export default Root;
