import  { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault(); // Prevent the default form submission
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
       <h1 className="mb-5 font-bold">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="border-solid border-2 border-gray-300 flex flex-col rounded-2xl items-center text-center w-80 md:w-96 h-80 ">
        <div className="flex flex-col">
                    <label htmlFor="password" className="font-semibold mt-5 text-left mb-2">email</label>
        <input
          type="email"
          id="email" // Link the label to the input
          className="border-solid 
          border-2 hover:border-neutral-300 border-stone-200
          rounded-md bg-gray-300  px-3 py-1 w-56"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Handle email input
          required
        /> 
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-semibold mt-5 text-left mb-2">password</label>
                  <input
          type="password" // Corrected type
          id="password" // Link the label to the input
          className="border-solid 
          border-2 hover:border-neutral-300 border-stone-200
          rounded-md bg-gray-300  px-3 py-1 w-56"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Handle password input
          required
          />
          <Link to="/RestPassword" className='text-xs text-blue-700 text-end'>Forget pssword</Link>
        </div>
        
        <button type="submit" className="rounded-2xl bg-blue-400 w-56 py-1 text-white px-10 mt-4">
          LOG IN
        </button>
        <div className="flex mt-5 "><p>Don't have any account ?</p>
        <Link to="/Singup" className='text-blue-600 font-bold'>Sign Up</Link></div>
    
      </form>
    </div>
  );
};
