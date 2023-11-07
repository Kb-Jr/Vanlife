import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { loginUser } from '../../api';

export const loader = ({request}) => {
  const url =  new URL(request.url).searchParams.get("message")
  return url;
 }


const Login = () => {
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })

 const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginFormData)
    .then(data => console.log(data))
 };

 const message = useLoaderData();

 function handleChange(e) {
  const { name, value } = e.target
  setLoginFormData(prev => ({
      ...prev,
      [name]: value
  }))
}

 return (
    <div className="w-3/4 h-3/4 m-5 flex flex-col items-center justify-center">
      <h1 className='font-bold text-3xl m-3'>Sign in to your Account</h1>
      {message && <div><h1 className='font-semibold text-red-500 text-2xl m-3 p-3'>{message}</h1></div>}
      <form onSubmit={handleSubmit}>
        <label className='font-semibold text-2xl'>
          Email:
          <input name="email" type="email" value={loginFormData.email} onChange={handleChange} required className='m-3 p-3' />
        </label>
        <br />
        <label className='font-semibold text-2xl'>
          Password:
          <input name='password' type="password" value={loginFormData.password} onChange={handleChange} required className='m-3 p-3 h-3/4 border-0' />
        </label>
        <br />
        <button type="submit" className='w-1/4 bg-slate-700 text-gray-200 hover:shadow-xl rounded-md m-3 p-3'>Login</button>
      </form>
    </div>
 );
};

export default Login;