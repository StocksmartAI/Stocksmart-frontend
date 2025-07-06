import { createBrowserRouter } from "react-router";
import App from "../App";
import AuthLayout from "../layouts/AuthLayout";
import About from "../modules/about/About";
import Home from "../modules/home/Home";
import Login from "../modules/auth/Login";
import Register from "../modules/auth/Register";
import ErrorRoute from "../components/common/ErrorRoute";

export default createBrowserRouter(
    [
        {
            path: "/",
            Component: App,
            children: [
                { index: true, Component: Home },
                { path: "about", Component: About },
                {
                    path: "auth",
                    Component: AuthLayout,
                    children: [
                        { path: "login", Component: Login },
                        { path: "register", Component: Register },
                    ],
                },


            ],
            ErrorBoundary: ErrorRoute
        },
    ]
)