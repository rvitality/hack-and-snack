import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header.component";

import Landing from "./routes/Landing/Landing.route";
import DesoComponent from "./components/Deso/Deso.component";
import Match from "./routes/Match/Match.route";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
    const { isLoggedIn } = useAuthContext();

    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Landing />} />
                <Route path="/match" element={isLoggedIn ? <Match /> : <Navigate to="/" />} />

                {/* TODO: Uncomment top code to restrict user */}
                {/* <Route path="/match" element={<Match />} /> */}
            </Route>
            <Route
                path="*"
                element={
                    <>
                        <Header />
                        <h1>Theres nothing here!</h1>
                        <p>404 page</p>
                    </>
                }
            />
        </Routes>
    );
};

export default App;
