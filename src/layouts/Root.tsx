import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-220.727px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
