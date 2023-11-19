import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const options = ['All(321)', 'Game(10)', 'Monkey(12)', 'Movie(5)', 'Character(6) '];

 
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="menu-container">
      {options.map((option, index) => (
        <div
          key={index}
          className={`menu-option ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Menu;
