import React from "react";
import spinner from "../assets/image/45.gif";

const Spinner = () => {
    return (
        <div>
            <img
                src={spinner}
                alt="Loading..."
                style={{
                    width: "30px",
                    margin: "40px auto",
                    display: "block",
                }}
            />
        </div>
    );
};

export default Spinner;
