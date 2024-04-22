import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./layout/defaultlayout/DefaultLayout";
import GuestLayout from "./layout/guestlayout/GuestLayout";
import Board from "./containers/board/Board";
import Signup from "./containers/signup/Signup";
import Login from "./containers/login/Login";
import NotFound from "./display/notfound/NotFound";
import Result from "./display/result/Result";
import Exam from "./Exam";
import App from "./App";
import Library from "./containers/library/Library";
import Whatsepp from "./containers/whatissepp/Whatsepp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/board" />,
            },
            {
                path: "/board",
                element: <Board />,
            },
            {
                path: "/Result",
                element: <Result />,
            },
            {
                path: "/exam/1",
                element: <Exam />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/app",
                element: <App />,
            },
            {
                path: "/library",
                element: <Library />,
            },
            {
                path: "/wsepp",
                element: <Whatsepp />,
            },

            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
