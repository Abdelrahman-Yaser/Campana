import { Link } from "react-router-dom"
import logo from '../../../../assets/Group (1).svg'
import { GoHomeFill } from "react-icons/go";
import { IoManSharp } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { BsFillClipboardPlusFill } from "react-icons/bs";
import { FaCreativeCommonsSampling } from "react-icons/fa";
export const SideBar = () => {
  return (
      <nav className="flex flex-col fixed h-screen w-36  md:w-56 bg-zinc-50fir  p-5 md:p-8 rounded-xl">
          <div className="">
              <Link to="/"><img  className="w-11" src={logo} alt="logo"/></Link>
          </div>
          <div className="mt-10">
              <ul className="flex flex-col gap-9">
                  <li className="flex items-center"><GoHomeFill color="blue" size={25}/><Link to="" className="mx-2 ">Home</Link></li>
                  <li className="flex items-center"><IoManSharp color="blue" size={25}/><Link to="" className="mx-2">Employees</Link></li>
                  <li className="flex items-center"> <FaProjectDiagram color="blue" size={25}/><Link to="" className="mx-2">Projects</Link></li>
                  <li className="flex items-center"> <BsFillClipboardPlusFill color="blue" size={25}/><Link to="" className="mx-2">Clients</Link></li>
                  <li className="flex items-center"> <FaCreativeCommonsSampling color="blue" size={25}/><Link to="" className="mx-2">Attendance</Link></li>
              </ul>
          </div>
</nav>
  )
}
