import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";

import Deso from "deso-protocol";
const deso = new Deso();

import logo from "../../assets/images/logo.png";

import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsMouse } from "react-icons/bs";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
    const { login, logout, isLoggedIn } = useAuthContext();

    const [loginResponse, setLoginResponse] = useState();

    const loginHandler = async () => {
        const { user } = await deso.identity.login();

        if (Object.keys(user).length === 0) {
            return;
        }

        const { encryptedSeedHex } = user;

        if (!encryptedSeedHex) return;

        setLoginResponse(encryptedSeedHex);

        // context, set user data
        login(encryptedSeedHex);
    };

    return (
        <>
            <header
                className={`${
                    !isLoggedIn ? "absolute" : "relative flex justify-between items-center"
                } z-[99] top-0 left-0 right-0 p-4 px-6`}
            >
                {/* <header className={` z-[99] top-0 left-0 right-0 p-4 px-6`}> */}
                <nav
                    className={` flex items-center justify-between font-semibold  pr-12 ${
                        !isLoggedIn ? "w-1/2" : "w-full"
                    }`}
                >
                    <div className="flex items-center ">
                        <Link to="/">
                            <img src={logo} alt="" className="w-[6rem] mr-6" />
                        </Link>

                        {/* <ul className="flex space-x-5">
                            <li>
                                <a href="#" className="duration-200 text-gray hover:text-black">
                                    <AiFillFacebook className="h-6 w-6" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="duration-200 text-gray hover:text-black">
                                    <AiOutlineInstagram className="h-6 w-6" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="duration-200 text-gray hover:text-black">
                                    <AiOutlineTwitter className="h-6 w-6" />
                                </a>
                            </li>
                        </ul> */}
                    </div>

                    {/* {isLoggedIn && (
                        <ul className="flex space-x-5">
                            <li>
                                <Link to="/" className="duration-200 text-gray hover:text-black">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="duration-200 text-gray hover:text-black">
                                    Recipes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/feed"
                                    className="duration-200 text-gray hover:text-black"
                                >
                                    Feed
                                </Link>
                            </li>
                        </ul>
                    )} */}

                    {!isLoggedIn && (
                        <a
                            href="#"
                            className=" border-[1px] text-gray border-gray rounded-full px-6 py-2 duration-150 hover:bg-black hover:text-white"
                            onClick={loginHandler}
                        >
                            Login
                        </a>
                    )}

                    {isLoggedIn && (
                        <Link
                            to="/"
                            className=" border-[1px] border-primary bg-primary rounded-full px-6 py-2 duration-200 hover:border-black hover:brightness-105"
                            onClick={logout}
                        >
                            Log Out
                        </Link>
                    )}
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Header;
