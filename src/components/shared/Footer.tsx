import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-white w-full shadow dark:bg-gray-900 ">
      <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <Logo />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licencias
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};
