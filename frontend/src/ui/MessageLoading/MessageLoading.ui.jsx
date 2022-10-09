import React from "react";

import "./MessageLoading.styles.css";

const MessageLoading = ({ className }) => {
    return (
        <div className="spring">
            <span className="bubble bubble1"></span>
            <span className="bubble bubble2"></span>
            <span className="bubble bubble3"></span>
            <span className="bubble bubble4"></span>
            <span className="bubble bubble5"></span>
        </div>
    );
};

export default MessageLoading;
