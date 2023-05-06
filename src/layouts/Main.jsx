//HELPER FNS
import { Outlet, useLoaderData } from "react-router-dom";

//REACT JS FNS
import { getData } from "../Helpers";

//assets
import wave from "../assets/wave.svg"

//components
import NavBar from "../components/Nav";

//loader
export function mainLoader() {
  const userName = getData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <NavBar userName={userName}/>
      <main>
      <Outlet/>
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
