import { Outlet } from "react-router-dom";
import { NavBar } from "../components/shared/NavBar";
import { Footer } from "../components/shared/Footer";
import WhatsAppButton from "../components/shared/WhatsAppLink";
import "../global.css";


export const RootLayout = () => {
  return (
    <div className=" container flex flex-col min-h-screen">
      <div className="sm:mx-5 lg:mx-0">
        <NavBar />
      </div>

      <main className=" flex-grow m-4">
        <Outlet />
      </main>

<div>
<WhatsAppButton />
</div>

     <div className=" flex-shrink-0">  

      <Footer  />
     </div>
     
    </div>
  );
};
