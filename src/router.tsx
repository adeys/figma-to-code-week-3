import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import Root from "./routes/root.tsx";
import About from "./routes/about.tsx";
import Team from "./routes/team.tsx";
import Pricing from "./routes/pricing.tsx";
import Contact from "./routes/contact.tsx";
import Home from "./routes/home.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/pricing", element: <Pricing /> },
            { path: "/team", element: <Team /> },
        ]
    }
])