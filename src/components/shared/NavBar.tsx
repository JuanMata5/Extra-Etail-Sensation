import { useState } from "react";
import {
  HiOutlineLogin,
  HiOutlineSearch,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { Logo } from "./Logo";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "../../constants/links";
import { FaBars } from "react-icons/fa";

export const NavBar = () => {
   // Estado que controla si el menú está abierto o cerrado en mobile
   const [isOpen, setIsOpen] = useState(false);

   // Función que invierte el estado de isOpen (abre o cierra el menú)
   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };

   return (
    <header className="bg-white py-4 flex items-center justify-between border-b border-slate-200 px-5 relative">
      {/* Botón para abrir el menú en mobile. Solo visible en pantallas pequeñas */}
      <button onClick={toggleMenu} className="md:hidden">
        <FaBars size={25} />
      </button>

      {/* Menú Mobile (oculto por defecto, solo visible si 'isOpen' es true) */}
      <div
        className={`absolute top-[80px] left-0 right-0 w-[90%] h-[200vh]  bg-white shadow-lg p-5 text-xl gap-[50px] flex flex-col items-start space-y-4 transition-all duration-300 z-50 ${
          isOpen ? "block" : "hidden"
        } md:hidden`} // 'hidden' si isOpen es false, 'block' si isOpen es true
      >
        {/* Recorremos los enlaces de navegación (navbarLinks) y generamos un <NavLink> por cada uno */}
        {navbarLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            className={({ isActive }) =>
              `${
                isActive ? "text-red-800 transition-all duration-300 ease-im-out" : ""
              } transition-all duration-300 font-medium hover:text-red-800 hover:underline`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* Logo (visible siempre) */}
      <Logo />

      {/* Menú Desktop (visible en pantallas grandes con clase md:flex) */}
      <nav className="hidden md:flex space-x-5">
        {/* Recorremos los enlaces de navegación para el menú de escritorio */}
        {navbarLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            className={({ isActive }) =>
              `${
                isActive ? "text-cyan-200" : ""
              } transition-all duration-300 font-medium hover:text-red-800 hover:underline`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>

      {/* Iconos de búsqueda, login y carrito */}
      <div className="flex gap-5 items-center">
        {/* Icono de búsqueda */}
        <button>
          <HiOutlineSearch size={30} />
        </button>

        {/* Icono de login */}
        <button>
          <HiOutlineLogin size={30} />
        </button>

        {/* Icono de carrito, con una pequeña notificación de cantidad */}
        <button className="relative">
          <span className="absolute bottom-[-5px] right-1.5 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full">
            0
          </span>
          <HiOutlineShoppingBag size={30} />
        </button>
      </div>
    </header>
  );
};