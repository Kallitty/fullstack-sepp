import React from "react";
import "./defaultlayout.scss";
import { useEffect } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import axiosClient from "../../axios-client";
import { Sidebar } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

export default function DefaultLayout() {
    const { user, token, setUser, setToken } = useStateContext();
    const location = useLocation();

    if (!token) {
        return <Navigate to="/app" />;
    }

    const onLogout = (e) => {
        e.preventDefault();
        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    };

    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, []);

    const isFullScreenQuiz = location.pathname.startsWith("/exam/"); // Generalized check for any quiz

    return (
        <div id="defaultLayout">
            {!isFullScreenQuiz && (
                <aside>
                    <Sidebar />
                </aside>
            )}
            <div
                className="content"
                style={{ width: isFullScreenQuiz ? "100%" : "auto" }}
            >
                {!isFullScreenQuiz && (
                    <header>
                        <div>Hello {user.name}!</div>
                        <div>
                            <a
                                href="#"
                                onClick={onLogout}
                                className="btn-logout"
                            >
                                Logout
                            </a>
                        </div>
                    </header>
                )}
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
