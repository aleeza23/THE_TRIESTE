"use client";
import { useState } from "react";
import Header from "./Header";
import Contentbox from "./Contentbox";

const Container = ({ children }) => {
    return (
        <>
            <div className="flex flex-col   bg-black overflow-hidden " style={{ minHeight: '100vh' }}>
                <Header />
                <Contentbox>
                    {children}
                </Contentbox>
            </div>
        </>
    );
};

export default Container;
