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
                path: "remeras",
                element: <Products />
            },
            {
                path: "nosotros",
                element: <div>Nosotros</div>
            }
        ]
    }
]);