import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
export const ResetPassword = () => {
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
      <GrPowerReset size={30} color="blue"/>
       <h1 className="mb-5 font-bold text-blue-400 text-2xl ">ResetPassword</h1>
       <span className="w-96 text-center mb-4 text-zinc-500 text-sm">We have sent you a new password, which you must enter to complete login</span>
      <form
        onSubmit={handleSubmit}
        className="border-solid border-2 border-gray-300 flex flex-col rounded-2xl items-center text-center w-80 md:w-96 h-64 ">
        <div className="flex flex-col">
                    <label htmlFor="password" className="font-semibold mt-5 text-left mb-2 text-zinc-500 text-sm">ResetPassword</label>
        <input
          type="email"
          id="email" // Link the label to the input
          className="border-solid 
          border-2 hover:border-neutral-300 border-stone-200
          rounded-md bg-gray-300  px-3 py-1 w-56"
          placeholder="Enter a new Password"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Handle email input
          required
        /> 
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-semibold mt-5 text-left mb-2 text-zinc-500 text-sm">Confirm password</label>
                  <input
          type="password" // Corrected type
          id="password" // Link the label to the input
          className="border-solid 
          border-2 hover:border-neutral-300 border-stone-200
          rounded-md bg-gray-300  px-3 py-1 w-56"
          placeholder="Enter a new Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Handle password input
          required
          />
  
        </div>
        
        <button type="submit" className="rounded-md bg-blue-400 w-56 py-1 text-white px-10 mt-4">
          LOG IN
        </button>

    
      </form>
    </div>
  )
}
