import { useState } from "react";
import { MdOutlinePassword } from "react-icons/md";

export const ForgetPassword = () => {
        const [email, setEmail] = useState('');
    return (
        <div className="flex flex-col justify-center items-center h-screen">
              <MdOutlinePassword/>
             <h1 className="mb-5 font-bold text-blue-400 text-2xl ">ResetPassword</h1>
       <span className="w-96 text-center mb-4 text-zinc-500 text-sm">We have sent you a new password, which you must enter to complete login</span>
            <form className="flex flex-col border-solid border-2 border-gray-300 w-72">
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
                <button type="submit" className="rounded-md bg-blue-400 w-56 py-1 text-white px-10 mt-4">
          LOG IN
        </button>
          </form>
      </div>
  )
}
