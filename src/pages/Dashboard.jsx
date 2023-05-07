//helpers
import { useLoaderData } from "react-router-dom";
import { getData } from "../Helpers";

//imports
import Intro from "../components/intro";
import AddBudgetForm from '../components/AddBudgetForm';

//loader
export function dashboardLoader() {
  const userName = getData("userName");
  const budgets = getData("budgets");
  return { userName,budgets };
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
  const { userName, budgets } = useLoaderData();
  return(
    <>
    {userName ? (
      <div className="dashboard">
        <h1>Welcome Back <span className="accent">{userName}!</span></h1>
        <div className="grid-sm">
          {/* {budgets ? () : ()} */}
          <div className="grid-lg">
            <div className="flex-large">
              <AddBudgetForm/>
            </div>

          </div>
          
        </div>

      </div>
    ): <Intro/>}
    </>
  )}

export default Dashboard;
