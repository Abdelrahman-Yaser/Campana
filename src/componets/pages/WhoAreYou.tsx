import { FcBusinessman } from "react-icons/fc";
import { NavLink } from "react-router-dom";

export const WhoAreYou = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-10 p-5">
      <div className="border-solid border-2 border-indigo-600 flex flex-col items-center rounded-md  px-14 py-14 text-center w-64 h-60">
        <FcBusinessman size={50} />
        <NavLink  to="/login" className="mt-5 text-lg font-semibold">The Owner</NavLink >
      </div>
      <div className="border-solid border-2 border-indigo-600 flex flex-col items-center rounded-md  px-14 py-14 text-center w-64 h-60">
        <FcBusinessman size={50} />
        <NavLink to="/login" className="mt-5 text-xl font-semibold">The Employee</NavLink >
      </div>
    </div>
  );
};
