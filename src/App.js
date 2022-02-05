import './App.css';
import Button from './components/Button.js';
import React, { useState } from 'react';

// Make Colors Array
const colors = [
  'red', 'green', 'blue', 'yellow', 'blue', 'brown', 'Chocolate', 'Coral', 'Crimson',
  'BlueViolet', 'BurlyWood', 'DarkCyan', 'Cyan', 'DarkMagenta', 'DarkOrange', 'indigo'
];
// Variable contains colors length;
const arraySize = colors.length;

function App() {
  // Make State
  const [color, setColor] = useState('blue');
  // Make function to change state
  const changeColor = () => {
    // Make Random Number
    const randomNumber = Math.floor(Math.random() * arraySize);
    setColor(colors[randomNumber]);
  };
  return (
    <div className="App" style={{backgroundColor: color}}>
      <Button changeColor={changeColor}/> 
    </div>
  );
}

export default App;
