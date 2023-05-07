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
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
  } catch (error) {
    prompt("there was an error creating your account please try again")
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <div>{userName ? <p>{userName}</p> : <Intro />}</div>;
};

export default Dashboard;
