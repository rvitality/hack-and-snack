import React from "react";

import watermelon from "./assets/images/watermelon.png";
import phone from "./assets/images/phone.png";

import { CgScrollV } from "react-icons/cg";

import adoboImg from "./assets/images/foods/adobo.png";

import RecipeCard from "./components/RecipeCard/RecipeCard.component";
import Header from "./components/Header/Header.component";

import "./App.css";

const App = () => {
    return (
        <div className="relative overflow-hidden">
            <Header />
            <div className="flex h-screen justify-end">
                {/* LEFT SIDE */}
                <div className="hero-left flex items-center justify-center w-1/2 ">
                    <img src={phone} alt="" className="h-3/4 mr-14 mt-20 z-[2]" />

                    <h1 className="main-heading absolute left-[100%] top-[40%] z-[5] flex flex-col items-start  font-satisfy text-[5rem] leading-none">
                        <span className="">choose</span>
                        <span className="text-[2.5rem]">your</span>
                        <span className="text-[7rem] ml-[5rem] mt-[-5rem]">match</span>
                    </h1>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative w-[55%] hero-right flex items-end ">
                    <img
                        src={watermelon}
                        alt=""
                        className="melon absolute z-[2] h-80 object-contain top-[55%] left-[5%]"
                    />

                    <div className="large-text__right ">
                        <span className="text-[5rem] block -mb-8">and find</span>{" "}
                        <span className="ml-4">good</span> <span className="ml-28">food</span>
                    </div>

                    {/* DISHES */}
                    <div className="dishes pl-60 flex items-center justify-between space-x-6">
                        {/* card 1 */}
                        <RecipeCard
                            imgSrc={adoboImg}
                            name="Chicken Adobo"
                            nutrition="40 calories"
                            time="30 mins."
                            servings="4"
                        />
                        {/* card 2 */}
                        <RecipeCard
                            imgSrc={adoboImg}
                            name="Chicken Adobo"
                            nutrition="40 calories"
                            time="30 mins."
                            servings="4"
                        />
                        {/* card 3 */}
                        <RecipeCard
                            imgSrc={adoboImg}
                            name="Chicken Adobo"
                            nutrition="40 calories"
                            time="30 mins."
                            servings="4"
                        />
                        {/* card 4 */}
                        <RecipeCard
                            imgSrc={adoboImg}
                            name="Chicken Adobo"
                            nutrition="40 calories"
                            time="30 mins."
                            servings="4"
                        />
                        {/* card 5 */}
                        <RecipeCard
                            imgSrc={adoboImg}
                            name="Chicken Adobo"
                            nutrition="40 calories"
                            time="30 mins."
                            servings="4"
                        />
                    </div>
                </div>
            </div>

            <div className="scroll absolute bottom-5 left-[46%] -translate-x-1/2 flex flex-col items-center space-y-3 z-10">
                {/* <BsMouse className="h-7 w-7 " /> */}
                <CgScrollV className=" h-6 w-6 " />
                <p className="text-sm text-black tracking-[.25rem]">Scroll</p>
            </div>
        </div>
    );
};

export default App;
