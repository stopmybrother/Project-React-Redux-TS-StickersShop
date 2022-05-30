import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../../containers/Header/Header";
import { Footer } from "../../../containers/Footer/Footer";

export const Layout = () => {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    );
};