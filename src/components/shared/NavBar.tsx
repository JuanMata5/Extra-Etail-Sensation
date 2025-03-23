import { HiOutlineLogin, HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi"
import { Logo } from "./Logo"
import { NavLink } from "react-router-dom"
import { navbarLinks } from "../../constants/links"
import { FaBars } from "react-icons/fa"

export const NavBar = () => {
  return (
    <header className="bg-white py-4 flex items-center justify-between  border-b border-slate-200 px-5">
      
      <button className="md:hidden">
         <FaBars size={25} />
      </button>

      <Logo/>

      <nav className="space-x-5 hidden md:flex">
        {
          navbarLinks.map(link => (
             <NavLink
             key={link.id}
             to={link.href}
             className={({ isActive }) => 
              `${isActive ? 'text-cyan-200' : ''
             
             }transition-all duration-300 font-medium hover:text-red-800  hover:underline` 
            }
             >
              {link.title}
             </NavLink>
          ))
        }
      </nav>

      <div className="flex gap-5 items-center">
      <button className="" >
           <HiOutlineSearch size={30} />
         </button>
        
         <button>
          <HiOutlineLogin size={30}/>
         </button>
        
         <button className="relative">
          <span className="absolute bottom-[-5px] right-1.5 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full">0</span>
          <HiOutlineShoppingBag size={30} />
         </button>
      </div>
    </header>
  )
}
