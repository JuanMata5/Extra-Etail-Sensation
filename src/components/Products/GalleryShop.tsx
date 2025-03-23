export const GalleryShop = () => {
  return (
    <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
        {/* Product 1 */}
        <section className="p-5 py-10 bg-white border border-gray-200  text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img  
            
            src="/img/DiseñoDelantero.jpeg"
            alt="Soft Plushy Cushion Chair"
          />
           <div className="space-x-1 flex justify-center mt-10">
           </div>
          <h1 className="text-2xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$29.99</h2>
          <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
            Agregar al carrito
          </button>
        </section>

        {/* Product 2 */}
        <section className="p-5 py-10 bg-white border border-gray-200 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img  
            
            src="/img/diseñoEspalda.jpeg"
            alt="Comfortable Wooden Chair"
          />
          <div className="space-x-1 flex justify-center mt-10">
          </div>
          <h1 className="text-2xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$39.99</h2>
          <button className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">
            Agregar al carrito
          </button>
        </section>

        {/* Product 3 */}
        <section className="p-5 py-10 bg-white border border-gray-200 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img  
            
            src="/img/diseñoEspaldaDemon.jpeg"
            alt="Multipurpose Wooden Trolly"
          />
          <div className="space-x-1 flex justify-center mt-10">
          </div>
          <h1 className="text-2xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$19.99</h2>
          <button className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">
            Agregar al carrito
          </button>
        </section>

        {/* Product 4 */}
        <section className="p-5 py-10 bg-white border border-gray-200 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img  
            
            src="/img/diseñoEspaldaDemon.jpeg"
            alt="Tool Set"
          />
          <div className="space-x-1 flex justify-center mt-10">
          </div>
          <h1 className="text-2xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$49.99</h2>
          <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Agregar al carrito
          </button>
        </section>

        <section className="p-5 py-10 bg-white border border-gray-200 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img  
            
            src="/img/DiseñoDelantero.jpeg"
            alt="Tool Set"
          />
          <div className="space-x-1 flex justify-center mt-10">
          </div>
          <h1 className="text-2xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$49.99</h2>
          <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Agregar al carrito
          </button>
        </section>

        <section className="p-5 py-10 bg-white border border-gray-200 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img  
            
            src="/img/diseñoEspalda.jpeg"
            alt="Tool Set"
          />
          <div className="space-x-1 flex justify-center mt-10">
          </div>
          <h1 className="text-2xl my-5">Lorem ipsum dolor sit amet</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, incidunt!</p>
          <h2 className="font-semibold mb-5">$49.99</h2>
          <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Agregar al carrito
          </button>
        </section>

        <section className="p-5 py-10 bg-white border border-gray-200 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img  
            
            src="/img/diseñoEspalda.jpeg"
            alt="Tool Set"
          />
          <div className="space-x-1 flex justify-center mt-10">
          </div>
          <h1 className="text-2xl my-5">Lorem ipsum dolor sit amet</h1>
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