import Directory from "../../directory/directory.component";
import { Outlet } from "react-router";
const Home= () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
