import React, { useState } from 'react';
import { redirect, useLoaderData, useNavigate, useActionData, useNavigation } from 'react-router-dom';
import { loginUser } from '../../api';
import { Form } from 'react-router-dom';


export const loader = ({ request }) => {
  const url = new URL(request.url).searchParams.get("message")
  return url;
}


export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email")
  const password = formData.get("password")
  const pathname = new URL(request.url).searchParams.get("redirectTo")

  try {
    const data = await loginUser({ email, password })
    localStorage.setItem("logged in", true)
    return redirect(pathname) || "/hosts"
  }
  catch (err) {
    return err.message
  }

}

const Login = () => {
  const errorMessage = useActionData();
  const navigation = useNavigation();

  const message = useLoaderData();


  return (
    <div className="w-3/4 h-3/4 m-5 flex flex-col items-center justify-center">
      <h1 className='font-bold text-3xl m-3'>Sign in to your Account</h1>
      {message && <div><h1 className='font-semibold text-red-500 text-2xl m-3 p-3'>{message}</h1></div>}
      {errorMessage && <div><h1 className='font-semibold text-red-500 text-2xl m-3 p-3'>{errorMessage}</h1></div>}
      <Form method='Post' replace>
        <label className='font-semibold text-2xl'>
          Email:
          <input name="email" type="email" required autoComplete='true' className='m-3 p-3' />
        </label>
        <br />
        <label className='font-semibold text-2xl'>
          Password:
          <input name='password' type="password" required className='m-3 p-3 h-3/4 border-0' />
        </label>
        <br />
        <button type="submit" className='w-1/4 bg-slate-700 text-gray-200 hover:shadow-xl rounded-md m-3 p-3'
          disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
};

export default Login;