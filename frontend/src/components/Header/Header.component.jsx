import React from "react";

import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsMouse } from "react-icons/bs";

const Header = () => {
    return (
        <header className="absolute z-[99] top-0 left-0 right-0 p-8 px-16">
            <nav className="flex justify-between font-semibold w-1/2 pr-12">
                <ul className="flex space-x-5">
                    <li>
                        <a href="#">
                            <AiFillFacebook className="h-6 w-6" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiOutlineInstagram className="h-6 w-6" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiOutlineTwitter className="h-6 w-6" />
                        </a>
                    </li>
                </ul>

                <ul className="flex space-x-5">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Recipes</a>
                    </li>
                    <li>
                        <a href="#">Match</a>
                    </li>
                </ul>

                <a href="#">
                    <BiUserCircle className="h-7 w-7" />
                </a>
            </nav>
        </header>
    );
};

export default Header;
