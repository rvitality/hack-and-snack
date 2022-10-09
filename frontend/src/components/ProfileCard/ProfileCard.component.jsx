import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import { FaUtensils } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

import "./ProfileCard.styles.css";

const ProfileCard = props => {
    const { index, user, onLikeDislike, onRemoveCard, onAddChat } = props;
    const { id, name, userImage, age, fave_food, fave_genre, distance } = user;

    const cardElement = useRef();
    const [startPoint, setStartPoint] = useState({});
    const [offset, setOffset] = useState({});

    const [transformStyle, setTransformStyle] = useState("");
    const [transitionStyle, setTransitionStyle] = useState("");

    const [move, setMove] = useState(false);

    const mouseMoveHandler = e => {
        e.preventDefault();
        if (!startPoint) return;
        const { clientX, clientY } = e;

        const offsetX = clientX - startPoint.x;
        const offsetY = clientY - startPoint.y;

        setOffset(prevState => ({ ...prevState, x: offsetX }));
        setOffset(prevState => ({ ...prevState, y: offsetY }));

        const rotate = offsetX * 0.1;
        setTransformStyle(`translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg)`);

        // dismiss card

        if (Math.abs(offsetX) > cardElement.current?.clientWidth * 0.7) {
            const direction = offsetX > 0 ? 1 : -1;

            setStartPoint({});
            // document.removeEventListener('mouseup', this.#handleMoveUp);
            // document.removeEventListener('mousemove', this.#handleMouseMove);
            // document.removeEventListener('touchend', this.#handleTouchEnd);
            // document.removeEventListener('touchmove', this.#handleTouchMove);

            setTransitionStyle("transform 1s");

            setTransformStyle(
                `translate(${direction * window.innerWidth}px, ${offsetY}px) rotate(${
                    90 * direction
                }deg)`
            );

            // this.element.classList.add("dismissing");
            setTimeout(() => {
                // this.element.remove();
                console.log("removed");
                onRemoveCard(user);
            }, 850);

            // if (typeof this.onDismiss === "function") {
            //     this.onDismiss();
            // }

            // ADD
            if (direction === 1) {
                onLikeDislike({ type: "like", userID: id });

                setTimeout(() => {
                    onAddChat(user);
                }, 600);
            }

            // simply DISMISS
            if (direction === -1) {
                onLikeDislike({ type: "dislike", userID: id });
            }
        }
    };

    const moveUpHandler = () => {
        setStartPoint(null);
        document.removeEventListener("mousemove", mouseMoveHandler);
        setTransformStyle("");
    };

    useEffect(() => {
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", moveUpHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseup", moveUpHandler);
        };
    }, [move]);

    const touchStartHandler = e => {
        const touch = e.changedTouches[0];
        if (!touch) return;
        const { x: clientX, y: clientY } = touch;
        setStartPoint({ clientX, clientY });
    };

    const mouseDownHandler = e => {
        const { clientX, clientY } = e;
        setStartPoint({ x: clientX, y: clientY });
        setMove(true);
    };

    const dragStartHandler = e => {
        e.preventDefault();
    };

    return (
        <div
            ref={cardElement}
            className={`card`}
            style={{ "--i": index, transform: transformStyle, transition: transitionStyle }}
            onTouchStart={touchStartHandler}
            onMouseDown={mouseDownHandler}
            onDrag={dragStartHandler}
        >
            <img src={userImage} alt="" />

            <div className="absolute bottom-4 left-6 z-10">
                <p className="flex items-end text-white space-x-2">
                    <span className="font-semibold text-2xl">{name.split(" ")[0]}</span>
                    <span className="text-xl font-medium">{age}</span>
                </p>

                <div className="mt-3 flex justify-start flex-col space-y-2">
                    <div className="flex items-center justify-start space-x-3 text-white ">
                        <FaUtensils className="h-6 w-4" />
                        <p className="text-white capitalize">{fave_genre}</p>
                    </div>

                    <div className="flex items-center justify-start space-x-3 text-white">
                        <MdChecklist className="h-6 w-6" />
                        <p className="text-white capitalize">{fave_food.join(", ")}</p>
                    </div>

                    <div className="flex items-center justify-start space-x-3 text-white">
                        <HiLocationMarker className="h-6 w-6 -ml-1" />
                        <p className="text-white">{distance}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
