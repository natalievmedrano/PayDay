//helpers
import { useLoaderData } from "react-router-dom";
import { getData } from "../Helpers";

//imports
import Intro from "../components/intro";

//loader
export function dashboardLoader() {
  const userName = getData("userName");
  return { userName };
}

//action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  localStorage.setItem("userName", JSON.stringify(formData.userName));
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <div>{userName ? <p>{userName}</p> : <Intro />}</div>;
};

export default Dashboard;
