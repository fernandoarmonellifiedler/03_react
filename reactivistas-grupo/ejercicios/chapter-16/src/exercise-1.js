// Create an app with labelled, controlled text inputs for First Name and Last Name, and have it display “Hello, {firstName} {lastName}!” in real time, as you type into the text boxes.
// sintethic event
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const HelloApp = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === 'firstname') setfirstName(e.target.value);
    if (e.target.id === 'lastname') setLastName(e.target.value);
  };

  return (
    <div>
      <h1>Exercise 1: controlled text inputs</h1>
      <label htmlFor='firstname'>First name: </label>
      <input
        type='text'
        placeholder='First name'
        id='firstname'
        value={firstName}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label htmlFor='lastname'>Last name: </label>
      <input
        type='text'
        placeholder='Last name'
        id='lastname'
        value={lastName}
        onChange={(e) => handleChange(e)}
      />
      <p>
        `Hello, {firstName} {lastName}!`
      </p>
    </div>
  );
};

ReactDOM.render(<HelloApp />, document.getElementById('root'));
