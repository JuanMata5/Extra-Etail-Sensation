export const GalleryShop = () => {
  return (
    <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
        {/* Product 1 */}
        <section className="p-5 py-10 bg-white border border-gray-200  text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img
            src="/public/img/agregar-un-subtitulo-491-9323f33b41a36b94d716433740165937-1024-1024.png"
            alt="Soft Plushy Cushion Chair"
          />
          <div className="space-x-1 flex justify-center mt-10">
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
          </div>
          <h1 className="text-3xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$29.99</h2>
          <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
            Agregar al carrito
          </button>
        </section>

        {/* Product 2 */}
        <section className="p-5 py-10 bg-white border border-gray-200 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img
            src="/public/img/agregar-un-subtitulo-491-9323f33b41a36b94d716433740165937-1024-1024.png"
            alt="Comfortable Wooden Chair"
          />
          <div className="space-x-1 flex justify-center mt-10">
          </div>
          <h1 className="text-3xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$39.99</h2>
          <button className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">
            Agregar al carrito
          </button>
        </section>

        {/* Product 3 */}
        <section className="p-5 py-10 bg-white border border-gray-200 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img
            src="/public/img/agregar-un-subtitulo-491-9323f33b41a36b94d716433740165937-1024-1024.png"
            alt="Multipurpose Wooden Trolly"
          />
          <div className="space-x-1 flex justify-center mt-10">
          </div>
          <h1 className="text-3xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$19.99</h2>
          <button className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">
            Agregar al carrito
          </button>
        </section>

        {/* Product 4 */}
        <section className="p-5 py-10 bg-white border border-gray-200 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img
            src="/public/img/agregar-un-subtitulo-491-9323f33b41a36b94d716433740165937-1024-1024.png"
            alt="Tool Set"
          />
          <div className="space-x-1 flex justify-center mt-10">
          </div>
          <h1 className="text-3xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$49.99</h2>
          <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Agregar al carrito
          </button>
        </section>

        <section className="p-5 py-10 bg-white border border-gray-200 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img
            src="/public/img/agregar-un-subtitulo-491-9323f33b41a36b94d716433740165937-1024-1024.png"
            alt="Tool Set"
          />
          <div className="space-x-1 flex justify-center mt-10">
          </div>
          <h1 className="text-3xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$49.99</h2>
          <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Agregar al carrito
          </button>
        </section>

        <section className="p-5 py-10 bg-white border border-gray-200 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img
            src="/public/img/agregar-un-subtitulo-491-9323f33b41a36b94d716433740165937-1024-1024.png"
            alt="Tool Set"
          />
          <div className="space-x-1 flex justify-center mt-10">
          </div>
          <h1 className="text-3xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$49.99</h2>
          <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Agregar al carrito
          </button>
        </section>

        <section className="p-5 py-10 bg-white border border-gray-200 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img
            src="/public/img/agregar-un-subtitulo-491-9323f33b41a36b94d716433740165937-1024-1024.png"
            alt="Tool Set"
          />
          <div className="space-x-1 flex justify-center mt-10">
          </div>
          <h1 className="text-3xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$49.99</h2>
          <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Agregar al carrito
          </button>
        </section>
        
      </section>
    </section>
  )
}