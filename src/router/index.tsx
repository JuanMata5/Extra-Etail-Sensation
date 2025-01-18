import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { Products } from "../pages/Products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "ProductsPage",
                element: <Products />
            },
            {
                path: "AboutPage",
                element: <div>Nosotros</div>
            },
            {
                path: "Contact",
                element: <div>Contacto</div>
            }
        ]
    }
]);