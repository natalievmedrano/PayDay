import { redirect } from "react-router-dom";
import { deleteItem } from "../Helpers";

export async function logoutAction(){
    //delete user
    deleteItem({key: "userName"})


    //return redirect
    return redirect("/")
}