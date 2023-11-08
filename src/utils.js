import { redirect } from "react-router-dom";


export async function requireAuth(){
    const isLoggedIn = localStorage.getItem("logged in")

    if (!isLoggedIn) {
        const response = redirect("/login?message=Log in to access this page")
       response.body = true;
       return response

    }
return null

}