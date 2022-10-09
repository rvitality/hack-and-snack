import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    user: {},
    token: "",
    isLoggedIn: false,
    login: token => {},
    logout: () => {},
});

export const AuthContextProvider = props => {
    const [user, setUser] = useState({ email: "", password: "", phone: "", address: "" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const loginHandler = userKey => {
        setIsLoggedIn(true);
        setUser(userKey);
        navigate("/match");
    };

    const logoutHandler = () => {
        setUser("");
        setIsLoggedIn(false);
        // navigate("/");
    };

    const contextValue = {
        user,
        isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
