import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./layout/defaultlayout/DefaultLayout";
import GuestLayout from "./layout/guestlayout/GuestLayout";
import Board from "./containers/board/Board";
import Board from "./containers/signup/Signup";
import Login from "./containers/login/Login";
import NotFound from "./display/notfound/NotFound";
import NotFound from "./display/result/Result";
import Board from "./Exam";
import Board from "./App";
import Board from "./containers/board";
import Board from "./containers/library/Library";
import Board from "./containers/whatissepp/Whatsepp";

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
                path: "/",
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
                path: "/board",
                element: <Board />,
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
