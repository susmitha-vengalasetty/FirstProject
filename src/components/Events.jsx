import React from "react";

const Button = () => {
    const handleButton = () => {
        alert('This is Button');
    }
    return(
        <button onClick = {handleButton}>Click Me</button>
    );
};
export default Button;