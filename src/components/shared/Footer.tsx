import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center space-x-3 lg:justify-start"
          >
            <Logo />
            <img
              src="/footer/DALL·E 2025-03-21 18.05.21 - A futuristic, high-energy digital design banner featuring the words 'E-TAIL SENSATION' in bold, metallic letters with a blood-splattered effect..webp"
              alt="Descripción de la imagen"
              className=" border-[2px] border-black rounded-md w-[350px] h-[140px] object-cover  "
            />
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
        <div className="space-y-3">
  <h3 className="tracking-wide uppercase text-red-800 font-bold">
    Producto
  </h3>
  <ul className="space-y-1">
    <li>
      <a rel="noopener noreferrer" href="#">
        Nuevas Llegadas
      </a>
    </li>
    <li>
      <a rel="noopener noreferrer" href="#">
        Colecciones
      </a>
    </li>
    <li>
      <a rel="noopener noreferrer" href="#">
        Ofertas
      </a>
    </li>
    <li>
      <a rel="noopener noreferrer" href="#">
        Tallas y Guía de Medidas
      </a>
    </li>
  </ul>
</div>

<div className="space-y-3">
  <h3 className="tracking-wide uppercase text-red-800 font-bold">
    Empresa
  </h3>
  <ul className="space-y-1">
    <li>
      <a rel="noopener noreferrer" href="#">
        Quiénes Somos
      </a>
    </li>
    <li>
      <a rel="noopener noreferrer" href="#">
        Política de Privacidad
      </a>
    </li>
    <li>
      <a rel="noopener noreferrer" href="#">
        Términos y Condiciones
      </a>
    </li>
    <li>
      <a rel="noopener noreferrer" href="#">
        Envíos y Devoluciones
      </a>
    </li>
  </ul>
</div>

<div className="space-y-3">
  <h3 className="uppercase text-red-800 font-bold">Desarrolladores</h3>
  <ul className="space-y-1">
    <li>
      <a rel="noopener noreferrer" href="#">
        API Pública
      </a>
    </li>
    <li>
      <a rel="noopener noreferrer" href="#">
        Documentación
      </a>
    </li>
    <li>
      <a rel="noopener noreferrer" href="#">
        Guías de Integración
      </a>
    </li>
  </ul>
</div>

          <div className="space-y-3">
            <div className="uppercase text-red-800 font-bold">Social media</div>
            <div className="flex justify-start space-x-3">
  <a
    rel="noopener noreferrer"
    href="#"
    title="Facebook"
    className="flex items-center p-1"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-6 h-6 text-gray-600 hover:text-blue-600"
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
    </svg>
  </a>

  <a
    rel="noopener noreferrer"
    href="#"
    title="Twitter"
    className="flex items-center p-1"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-6 h-6 text-gray-600 hover:text-blue-400"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
    </svg>
  </a>

  <a
    rel="noopener noreferrer"
    href="#"
    title="Instagram"
    className="flex items-center p-1"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-6 h-6 text-gray-600 hover:text-pink-500"
    >
      <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
    </svg>
  </a>
</div>
            
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © 2026 E-tail Sensation. All rights reserved.
      </div>
    </footer>
  );
};
