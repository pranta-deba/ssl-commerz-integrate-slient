import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h1>navbar</h1>
      <main>
        <Outlet />
      </main>
      <h1>footer</h1>
    </div>
  );
};

export default Root;
