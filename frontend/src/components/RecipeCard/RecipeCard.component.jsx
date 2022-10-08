import React from "react";

const RecipeCard = props => {
    const { imgSrc, name, nutrition, time, servings } = props;

    return (
        <div className="bg-white px-6 w-52 pb-4 pt-0 shadow-xl  rounded-t-xl space-y-5 flex flex-col items-center justify-center z-10">
            <div className="flex flex-col items-center justify-center ">
                <img src={imgSrc} alt="Adobo" className="w-28 -mt-12 drop-shadow-2xl" />
                <p className="mt-3 text-1xl text-black font-semibold text-center capitalize">
                    {name}
                </p>
                <p>{nutrition}</p>
            </div>

            <div className="flex items-center justify-between space-x-9">
                <p className="flex flex-col ">
                    <span className="text-gray text-xs">Time</span>
                    <span className="font-medium text-black text-xs">{time}</span>
                </p>

                <p className="flex flex-col">
                    <span className="text-gray text-xs">Servings</span>
                    <span className="font-medium text-black text-xs">{servings} persons</span>
                </p>
            </div>
        </div>
    );
};

export default RecipeCard;
