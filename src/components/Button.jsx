import React from 'react';
import './Button.css'; // Import CSS file

const Button = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
};

export default Button;
