import React, { useState } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";

import { RiHeart3Fill } from "react-icons/ri";
import { TbHeartOff } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";

import { MdInsertPhoto, MdKeyboardVoice } from "react-icons/md";
import { HiOutlinePaperClip } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { useRef } from "react";
import { useEffect } from "react";

import MessageLoading from "../../ui/MessageLoading/MessageLoading.ui";

// https://source.unsplash.com/random/1000x1000/?philippines

import userProfileImg from "../../assets/images/profiles/user.jpg";
import chris from "../../assets/images/profiles/chris.jpg";
import chantal from "../../assets/images/profiles/chantal.jpg";
import josh from "../../assets/images/profiles/josh.jpg";
import renz from "../../assets/images/profiles/renz.jpg";
import lib from "../../assets/images/profiles/lib.jpg";
import rowan from "../../assets/images/profiles/rowan.jpg";
import citra from "../../assets/images/profiles/citra.jpg";

const DUMMY_DATA = [
    {
        id: 0,
        name: "Christian Mina",
        age: 20,
        fave_food: ["pizza", "pinakbet", "kare-kare"],
        fave_resto: "Manam",
        least_fave_resto: "Coco Ichibanya",
        fave_genre: "Filipino cuisine",
        distance: "2.5 km away",
        userImage: chris,
    },
    {
        id: 1,
        name: "Joshua Sintos",
        age: 22,
        fave_food: ["sushi", "ramen", "chicken adobo"],
        fave_resto: "Yabu",
        least_fave_resto: "KFC",
        fave_genre: "Japanese cuisine",
        distance: "2 km away",
        userImage: josh,
    },
    {
        id: 2,
        name: "Renz Vital",
        age: 22,
        fave_food: ["fried chicken", "eggs benedict", "kare-kare"],
        fave_resto: "S&R",
        least_fave_resto: "Jollibee",
        fave_genre: "Western cuisine",
        distance: "2 km away",
        userImage: renz,
    },
    {
        id: 3,
        name: "Chantal Pino",
        age: 18,
        fave_food: ["chickpea falafels", "pita and hummus", "beef shawarma"],
        fave_resto: "Ababu",
        least_fave_resto: "Wendy's",
        fave_genre: "Mediterranean cuisine",
        distance: "1 km away",
        userImage: chantal,
    },
    {
        id: 4,
        name: "Lib Martinito",
        age: 24,
        fave_food: ["sausages", "schnitzel", "maultaschen"],
        fave_resto: "Brotzeit German",
        least_fave_resto: "Jollibee",
        fave_genre: "German cuisine",
        distance: "4 km away",
        userImage: lib,
    },
    {
        id: 5,
        name: "Citra Terranova",
        age: 18,
        fave_food: ["pasta", "schnitzel", "maultaschen"],
        fave_resto: "Brotzeit German",
        least_fave_resto: "Jollibee",
        fave_genre: "Italian cuisine",
        distance: "3 km away",
        userImage: citra,
    },
    {
        id: 6,
        name: "Rowan Damisch",
        age: 19,
        fave_food: ["kimchi", "schnitzel", "maultaschen"],
        fave_resto: "Brotzeit German",
        least_fave_resto: "Jollibee",
        fave_genre: "Koream cuisine",
        distance: "2 km away",
        userImage: rowan,
    },
];

const DUMMY_RESPONSES = [
    "Hello, how are you?",
    "I'm fine, thanks!",
    "Yes, I do. I checked your profile. You seem to like those too!",
    "I'm from Manila",
    "No, I always prefer to eat at home. You know, cooking for ya self :)",
    "I'm not really sure.",
    "Perfect!",
];

const formatTime = date => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
};

import "./Math.styles.css";

const Match = () => {
    const [cardCount, setCardCount] = useState(0);
    const [cardList, setCardList] = useState(DUMMY_DATA);

    const [showChat, setShowChat] = useState(false);

    const [chatList, setChatList] = useState([]);

    const [status, setStatus] = useState({ type: "", animation: "", isTrigger: "" });

    const [chatUser, setChatUser] = useState(cardList[0]);

    const scrollBottomElement = useRef();
    const yourMessageRef = useRef();
    const [messageList, setMessageList] = useState([]);

    const [friendMsgIndex, setFriendMsgIndex] = useState(0);

    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const wait = setTimeout(() => {
            setShowCards(true);
        }, 1500);

        return () => {
            clearTimeout(wait);
        };
    });

    const sendYourResponseHandler = e => {
        e.preventDefault();

        const yourMsg = yourMessageRef.current.value;

        const yourResponse = {
            id: Math.random(),
            user: "you",
            msg: yourMsg,
        };

        setMessageList(prevState => {
            return [...prevState, yourResponse];
        });

        const friendResponse = {
            id: Math.random(),
            user: "friend",
            msg: <MessageLoading />,
        };

        setTimeout(() => {
            setMessageList(prevState => {
                return [...prevState, friendResponse];
            });
        }, 3000);

        setTimeout(() => {
            setMessageList(prevState => {
                prevState[prevState.length - 1].msg = DUMMY_RESPONSES[friendMsgIndex];
                return [...prevState];
            });

            scrollBottomElement.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }, 5000);

        setFriendMsgIndex(prevState => prevState + 1);

        yourMessageRef.current.value = "";
    };

    const selectUserToChatHandler = user => {
        setChatUser(user);
        setShowChat(true);
    };

    const removeCardHandler = user => {
        setCardList(prevState => prevState.filter(currentUser => currentUser.id !== user.id));
    };

    const addChatHandler = user => {
        setChatList(prevState => {
            const existingUserIndex = prevState.findIndex(
                currentUser => currentUser.id === user.id
            );

            if (existingUserIndex >= 0) {
                prevState[existingUserIndex] = user;
                return prevState;
            } else {
                return [...prevState, user];
            }
        });
    };

    const onLikeDislikeHandler = ({ type }) => {
        setStatus(prevState => ({
            type,
            animation: "running",
            isTrigger: !prevState.isTrigger ? "trigger" : "",
        }));
    };

    const { name, userImage } = chatUser || {};

    return (
        <section className=" bg-[#dadce2]">
            <div className="bg-white h-screen  flex justify-between space-x-6 ">
                {/* Cards */}
                <div className="relative w-[65%] shadow-2xl p-6 rounded-xl flex items-center justify-center pt-32 px-22 pb-10 space-x-36">
                    <div
                        id="dislike"
                        name="heart-dislike"
                        style={{
                            animationPlayState: `${
                                status.type === "dislike" ? status.animation : ""
                            }`,
                        }}
                        className={`${status.type === "dislike" ? status.isTrigger : ""}`}
                    >
                        <TbHeartOff />
                    </div>

                    {!showCards && (
                        <div className="relative w-44">
                            <MessageLoading />
                        </div>
                    )}

                    {showCards && (
                        <div id="swiper">
                            {cardList.map((user, index) => (
                                <ProfileCard
                                    key={user.id}
                                    index={index}
                                    user={user}
                                    onLikeDislike={onLikeDislikeHandler}
                                    onRemoveCard={removeCardHandler}
                                    onAddChat={addChatHandler}
                                />
                            ))}
                        </div>
                    )}

                    <div
                        id="like"
                        name="heart"
                        style={{
                            animationPlayState: `${status.type === "like" ? status.animation : ""}`,
                        }}
                        className={`${status.type === "like" ? status.isTrigger : ""}`}
                    >
                        <RiHeart3Fill />
                    </div>
                </div>

                {/* CHAT CONTAINER */}
                <div className="shadow-2xl p-6 rounded-xl w-[35%] ">
                    {showChat && (
                        <div className="mt-4 h-full ">
                            <div className="flex flex-col space-y-6 h-full">
                                {/* upper */}
                                <div className="flex items-center space-x-5">
                                    <button onClick={() => setShowChat(false)}>
                                        <BsArrowLeft className="h-5 w-5 duration-200 cursor-pointer opacity-70  hover:-translate-x-1 hover:opacity-100" />
                                    </button>

                                    <div className="flex w-full items-center justify-between space-x-4">
                                        <div className="flex space-x-4">
                                            <img
                                                src={userImage}
                                                alt={name}
                                                className="object-cover h-12 w-12 rounded-full shadow-lg"
                                            />

                                            <div>
                                                <p className="capitalize text-black font-semibold">
                                                    {name}
                                                </p>
                                                <div className="group font-medium text-sm flex items-center  space-x-2">
                                                    <div className="w-2 h-2 bg-green-400 rounded-full duratio-500 group-hover:animate-ping"></div>

                                                    <span className="">Active</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="duration-200 hover:scale-105">
                                            <BsThreeDotsVertical className="h-6 w-6" />
                                        </button>
                                    </div>
                                </div>

                                {/* chat box */}
                                <div className="bg-white border-t-[1px] border-gray border-opacity-50 pt-6 -p-4 flex flex-col justify-between h-full">
                                    {/* chats */}
                                    <div
                                        id="chat-box"
                                        className="space-y-10 h-[425px] overflow-y-auto pr-4"
                                    >
                                        {messageList.map(data => {
                                            const { user, msg } = data;

                                            // YOUR RESPONSES
                                            if (user === "you") {
                                                return (
                                                    <div key={data.msg} className="flex space-x-4">
                                                        {/* profile */}
                                                        <div className="flex flex-col  space-y-2 justify-center items-center">
                                                            <img
                                                                src={userProfileImg}
                                                                alt={name}
                                                                className="object-cover h-8 w-8 rounded-full shadow-xl"
                                                            />
                                                            <span className="text-xs text-gray">
                                                                {formatTime(new Date())}
                                                            </span>
                                                        </div>

                                                        {/* msg */}
                                                        <div className="bg-white p-4 shadow-md">
                                                            {msg}
                                                        </div>
                                                    </div>
                                                );
                                            }

                                            // FRIENDS RESPONSES
                                            return (
                                                <div
                                                    key={data.msg}
                                                    className="flex flex-row-reverse "
                                                >
                                                    {/* profile */}
                                                    <div className=" ml-3 flex flex-col  space-y-2 justify-center items-center">
                                                        <img
                                                            src={userImage}
                                                            alt={name}
                                                            className="object-cover h-8 w-8 rounded-full shadow-xl"
                                                        />
                                                        <span className="text-xs text-gray">
                                                            {formatTime(new Date())}
                                                        </span>
                                                    </div>

                                                    {/* msg */}
                                                    <div
                                                        className={`relative p-4 ${
                                                            typeof msg === "object"
                                                                ? "pr-12"
                                                                : "bg-primary shadow-md"
                                                        }`}
                                                    >
                                                        {msg}
                                                    </div>
                                                </div>
                                            );
                                        })}

                                        <div
                                            className="bottom-scroll"
                                            ref={scrollBottomElement}
                                        ></div>
                                    </div>

                                    {/* input */}
                                    <form
                                        onSubmit={sendYourResponseHandler}
                                        className="bg-white flex items-center justify-between w-full space-x-4 "
                                    >
                                        <div className=" flex items-center border-[1px] border-gray py-3 px-5 rounded-full">
                                            <input
                                                type="text"
                                                placeholder="Write something ..."
                                                className="w-full focus:outline-none"
                                                // value={yourMessage}
                                                // onChange={inputChangeHandler}
                                                ref={yourMessageRef}
                                            />

                                            <div className="ml-3 flex items-center space-x-4">
                                                <button href="#">
                                                    <MdInsertPhoto className="h-5 w-5" />
                                                </button>
                                                <button href="#">
                                                    <HiOutlinePaperClip className="h-5 w-5" />
                                                </button>
                                                <button href="#">
                                                    <MdKeyboardVoice className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="flex items-center justify-center p-3 bg-primary rounded-full cursor-pointer  shadow-xl group duration-200 hover:scale-105"
                                        >
                                            <IoIosSend className="h-7 w-7 duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}

                    {!showChat && (
                        <>
                            {/* Search */}
                            <div className="bg-[#e5e7ec] p-3 py-4 rounded-xl  flex items-center space-x-4">
                                <BiSearchAlt2 className="h-6 w-6" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full bg-transparent focus:outline-none"
                                />
                            </div>

                            {/* CHATS */}
                            <div className="flex flex-col mt-6 space-y-2">
                                {chatList.map((user, index) => {
                                    const {
                                        id,
                                        userImage,
                                        name,
                                        fave_genre,
                                        fave_food,
                                        least_fave_resto,
                                    } = user;

                                    return (
                                        <a
                                            href="#"
                                            key={id}
                                            className="flex items-center justify-between space-x-2 w-full duration-200  p-3 rounded-lg cursor-pointer hover:bg-[#E5E7EC]"
                                            onClick={() => selectUserToChatHandler(user)}
                                        >
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={userImage}
                                                    alt={name}
                                                    className="object-cover h-14 w-14 rounded-full"
                                                />

                                                <div className="flex space-x-5 justify-between">
                                                    <div>
                                                        <p className="capitalize  text-xs">
                                                            {fave_genre}
                                                        </p>
                                                        <p className="capitalize text-black font-bold">
                                                            {name}
                                                        </p>

                                                        {messageList.length > 0 && (
                                                            <p className="font-semibold text-black text-sm ">
                                                                {messageList.length % 2 === 0
                                                                    ? "You: "
                                                                    : chatUser.name}
                                                                {
                                                                    messageList[
                                                                        messageList.length - 1
                                                                    ]?.msg
                                                                }
                                                            </p>
                                                        )}

                                                        {/* <p className="capitalize text-xs">
                                                    {fave_food.join(", ")}
                                                </p> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-right text-gray text-sm font-semibold w-[30%]">
                                                {formatTime(new Date())}
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Match;
