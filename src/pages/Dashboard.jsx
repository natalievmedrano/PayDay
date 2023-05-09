//helpers
import { useLoaderData } from "react-router-dom";
import { createPayment, getData } from "../Helpers";

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
  const {_action,...values} = Object.fromEntries(data);


  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
    } catch (error) {
      prompt("there was an error creating your account please try again")
    }
  }
  if(_action === "newPayment"){
   try {
    createPayment({name: values.newPayment, amount: values.newPaymentAmount})
   } catch (error) {
    throw new Error ("There was a problem adding this payment")
   }
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
