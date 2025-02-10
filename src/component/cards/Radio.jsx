import React from 'react';
import styled from 'styled-components';

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="select">
        <div className="selected" data-default="Services" data-one="option-1" data-two="option-2" data-three="option-3">
          
        </div>
        <div className="options">
          <div title="all">
            <input id="all" name="option" type="radio" defaultChecked />
            <label className="option" htmlFor="all" data-txt="Services" />
          </div>
          <div title="option-1">
            <input id="option-1" name="option" type="radio" />
            <label className="option" htmlFor="option-1" data-txt="option-1" />
          </div>
          <div title="option-2">
            <input id="option-2" name="option" type="radio" />
            <label className="option" htmlFor="option-2" data-txt="option-2" />
          </div>
          <div title="option-3">
            <input id="option-3" name="option" type="radio" />
            <label className="option" htmlFor="option-3" data-txt="option-3" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .select {
    width: fit-content;
    cursor: pointer;
    position: relative;
    transition: 300ms;
    color: white;
    overflow: hidden;
    width: 100px;
   
  }

  .selected {
    background-color: transparent;
    padding: 5px;
    margin-bottom: 3px;
    border-radius: 5px;
    position: relative;
    z-index: 100000;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
     display: flex;
    justify-content: center;
    
  }


  .options {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 5px;
    background-color: #2a2f3b;
    position: relative;
    top: -100px;
    opacity: 0;
    transition: 300ms;
    width: 5000px;
    
  }

  .select:hover > .options {
    opacity: 1;
    top: 0;
    width: 5000px;
  }


  .option {
    border-radius: 5px;
    padding: 5px;
    transition: 300ms;
    background-color: #2a2f3b;
    width: 150px;
    font-size: 15px;
    width: 5000px;
    
  }
  .option:hover {
    background-color: #323741;
    width: 5000px;
    
  }

  .options input[type="radio"] {
    display: none;
    
  }

  .options label {
    display: inline-block;
    width: 5000px;
    
  }
  .options label::before {
    content: attr(data-txt);
    
  }

  .options input[type="radio"]:checked + label {
    display: none;
    
  }

  .options input[type="radio"]#all:checked + label {
    display: none;
    
  }

  .select:has(.options input[type="radio"]#all:checked) .selected::before {
    content: attr(data-default);
  }
  .select:has(.options input[type="radio"]#option-1:checked) .selected::before {
    content: attr(data-one);
  }
  .select:has(.options input[type="radio"]#option-2:checked) .selected::before {
    content: attr(data-two);
  }
  .select:has(.options input[type="radio"]#option-3:checked) .selected::before {
    content: attr(data-three);
  }`;

export default Radio;
