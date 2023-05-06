//helpers
import { useLoaderData } from "react-router-dom";
import { getData } from "../Helpers";

export function dashboardLoader() {
  const userName = getData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <div>
    <h1>{userName}</h1>
    dash
  </div>;
};

export default Dashboard;
