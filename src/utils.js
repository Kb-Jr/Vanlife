import { redirect } from "react-router-dom";


export async function requireAuth(request){
    const pathname = new URL(request.url).pathname 
    const isLoggedIn = localStorage.getItem("logged in")
    // const isLoggedIn = false;

    if (!isLoggedIn) {
        const response = redirect(
            `/login?message=Log in to access this page&redirectTo=${pathname}`
            )
       response.body = true;
       return response

    }
return null

}