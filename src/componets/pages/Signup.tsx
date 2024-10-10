import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../.././assets/Group (1).svg'
export const Singup = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
    <div className="mt-5 mx-3">  
    <img  className="w-11" src={logo} alt="logo"/>
    </div>
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-blue-400 mb-7 font-bold text-2xl">Sing Up</h1>
      <form className="border-solid border-2 border-gray-300 flex flex-col rounded-2xl items-center text-center w-80 md:w-96">
{/* name */}
        <div className=" name flex gap-3">
          <div className="flex  flex-col  ">
          <label htmlFor="password" className="font-semibold mt-3 text-start  text-sm">Frist Name</label>
          <input
          type="text" // Corrected type
          id="Frist Name" // Link the label to the input
          className="border-solid 
          border-2 hover:border-neutral-300 border-stone-200
          rounded-md bg-gray-300  px-3 py-1 w-36 text-sm"
          placeholder="Frist Name"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Handle password input
          required
          />
          </div>
          <div className="flex  flex-col ">
          <label htmlFor="password" className="font-semibold mt-3 text-left  text-sm">Last Name</label>
          <input
          type="text" 
          id="Last Name" 
          className="border-solid 
          border-2 hover:border-neutral-300 border-stone-200
          rounded-md bg-gray-300  px-3 py-1 w-36"
          placeholder="Last Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
            /></div>
        </div>
        {/* email */}
            <div className="mt-3 flex items-center  ">
        <label htmlFor="password" className="font-semibold  mx-1 text-left text-sm ">email</label>
        <input
          type="email"
          id="email" // Link the label to the input
          className="border-solid border-2 hover:border-neutral-300 border-stone-200 rounded-md bg-gray-300  px-2 py-1 w-64"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Handle email input
          required
        /> 
        </div>
        {/* Date-Loction */}
        <div className="flex gap-3 mt-2">
          <div className="flex flex-col">
     <label className="text-start text-sm">Date of Brith</label>
      <input className="border-solid 
          border-2 hover:border-neutral-300 border-stone-200
          rounded-md bg-gray-300  px-3 py-1 w-36 h-9 " type="date"/>
          </div>
          <div className="flex flex-col">
            <label className="text-start text-sm">Loction<span className="text-red-500">*</span> </label>
            <select id="options" name="options" className="border-solid border-2 hover:border-neutral-300 border-stone-200
            rounded-md bg-gray-300  px-3 py-1 w-36 h-9 ">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
          </div>
        </div>
        {/* mobile phone */}
        <div className="flex flex-col">
<label className="text-start text-sm">Mobile Number:</label>
          <input type="tel" id="mobile" name="mobile" placeholder="123-456-7890"
                    className="border-solid 
          border-2 hover:border-neutral-300 border-stone-200
          rounded-md bg-gray-300  px-3 py-1 w-80"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
        </div>
        {/* start Position-Employment */}
                <div className="flex gap-3 mt-2">
          <div className="flex flex-col">
     <label className="text-start text-sm">Position</label>
            <select id="options" name=" Select position"
            className="border-solid border-2 hover:border-neutral-300 border-stone-200
            rounded-md bg-gray-300  px-3 py-1 w-36 h-9 ">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
          </div>
          <div className="flex flex-col">
            <label className="text-start">Employment<span className="text-red-500">*</span> </label>
            <select id="options" name="Select Employment" className="border-solid border-2 hover:border-neutral-300 border-stone-200
            rounded-md bg-gray-300  px-3 py-1 w-36 h-9 ">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
          </div>
        </div>
        {/* end Position-Employment */}
        <div className=" flex flex-col">
          <label className="text-start text-sm">ID Number</label>
          <input type="number" placeholder="Ex: 40 0552 98"
          className="border-solid border-2 hover:border-neutral-300 border-stone-200
            rounded-md bg-gray-300  px-3 py-1 w-80 h-9 "
            id="number-input" min="0" max="100" />
        </div>
        {/* PassWord */}
        <div className="flex flex-col">
                    <label htmlFor="password" className="font-semibold  text-left mb-2 text-sm">password</label>
                  <input
          type="password" // Corrected type
          id="password" // Link the label to the input
          className="border-solid 
          border-2 hover:border-neutral-300 border-stone-200
          rounded-md bg-gray-300  px-3 py-1 w-80"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Handle password input
          required
          />
        </div>
        {/*Confirm PassWord */}
        <div className="flex flex-col mb-7">
                    <label htmlFor="password" className="font-semibold  text-left mb-2 text-sm"> Confirm password</label>
                  <input
          type="password" // Corrected type
          id="password" // Link the label to the input
          className="border-solid 
          border-2 hover:border-neutral-300 border-stone-200
          rounded-md bg-gray-300  px-3 py-1 w-80"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Handle password input
          required
          />
        </div>

<button  type="reset"  className=" flex items-end rounded-md bg-blue-400 w-28 py-1  text-white px-5  mb-4">Rreset</button>
<button className="rounded-md bg-blue-400 w-72 py-1 text-white px-10 mb-4">CONTINUE</button>
      </form>
      <p className="mt-8">HAVE AN ACCOUNT  ? <Link to="/Login" className='text-blue-600 font-bold'>Sign In</Link></p>
</div>
    </>
  )
}
