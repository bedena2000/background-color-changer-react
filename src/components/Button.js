import React, { useState } from 'react';
import './Button.css';

const Button = ({changeColor}) => {
  return (
    <button className="btn" onClick={changeColor}>Change Color!!!</button>
  )
};

export default Button;
