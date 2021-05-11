// Create another version of the app from Exercise 1, with labelled text inputs for First Name and Last Name, but make themuncontrolledinputs instead. Create refs to the inputs, and add aSubmit button that, when clicked, will update the display to reflect the values in the inputs.
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const HelloApp = () => {
  const firstName = useRef();
  const lastName = useRef();

  const handleUpdate = () => {
   
    alert(`Hello ${firstName.current.value} ${lastName.current.value}!`);
  };

  return (
    <div>
      <h1>Exercise 2: uncontrolled text inputs</h1>
      <label htmlFor='firstname'>First name: </label>
      <input type='text' placeholder='First name' ref={firstName} />
      <br />
      <label htmlFor='lastname'>Last name: </label>
      <input type='text' placeholder='Last name' ref={lastName} />
      <br />
      <button onClick={handleUpdate}>Show texts</button>
    </div>
  );
};

ReactDOM.render(<HelloApp />, document.getElementById('root'));
