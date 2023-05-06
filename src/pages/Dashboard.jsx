//helpers
import { useLoaderData } from "react-router-dom";
import { getData } from "../Helpers";

//imports
import Intro from "../components/intro";

export function dashboardLoader() {
  const userName = getData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <div>
    {userName ? (<p>{userName}</p>):<Intro/>}
    
  </div>;
};

export default Dashboard;
