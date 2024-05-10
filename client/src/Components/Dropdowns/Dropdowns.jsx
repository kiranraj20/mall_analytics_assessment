import React, { useState, useEffect, useRef } from 'react';
import './Dropdowns.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdowns = ({ array, placeHolders , handleValue, id}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleOption = (newValue) => {
    setValue(newValue);
    setIsOpen(false);
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="">
        <div className='dropdown-button' onClick={handleMenu}>
          {value ? value : <p className='placeholders'>{placeHolders}</p>}
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <ul className={isOpen ? 'menu-open' : 'menu-close'}>
          {array.map((item) => {
            return (
              <li className='dropdown-option' key={item} id={item} onClick={() => {handleOption(item); handleValue(id,item)}}>{item}</li>
            )
          })}
          <li className='dropdown-option' id='' onClick={() => handleOption('')}>N/A</li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdowns;
