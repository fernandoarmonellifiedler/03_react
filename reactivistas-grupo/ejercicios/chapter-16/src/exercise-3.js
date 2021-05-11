// Create an app that involves radio buttons, a checkbox, aselectdropdown, and a textarea. You canmodel it after this form for ordering a pizza, or make up something on your own.

// Create an app that involves radio buttons, a checkbox, aselectdropdown, and a textarea. You canmodel it after this form for ordering a pizza, or make up something on your own.
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const HelloApp = () => {
  const [size, setSize] = useState('');

  return (
    <div>
      <h1>Exercise 3: Order your Pizza!</h1>
      <form action=''>
        <div className='size'>
          <h1>Size</h1>
          <label htmlFor='small'>Small</label>
          <input
            type='radio'
            name='size'
            id='size'
            value='small'
            checked={size === 'small'}
            onChange={(e) => setSize(e.target.value)}
          />
          <label htmlFor='medium'>Medium</label>
          <input
            type='radio'
            name='size'
            id='size'
            value='medium'
            checked={size === 'medium'}
            onChange={(e) => setSize(e.target.value)}
          />
          <label htmlFor='large'>Large</label>
          <input
            type='radio'
            name='size'
            id='size'
            value='large'
            checked={size === 'large'}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <div className='topping'>
          <label htmlFor='topping'>Topping</label>
          <select name='topping' id='topping'>
            <option value='peperoni'>Peperoni</option>
            <option value='muzzarella'>Muzzarella</option>
            <option value='calabresa'>Calabresa</option>
          </select>
          <br />
          <input
            type='checkbox'
            id='gluten'
            name='gluten'
            value='Gluten free'
          />
          <label htmlFor='gluten'>Gluten free</label>
        </div>
        <br />
        <div className='special-instructions'>
          <label htmlFor="instructions">Special instructions:</label>
          <textarea name="instructions" id="instructions" cols="30" rows="10">extra crispy</textarea>
        </div>
        <button>Send Order</button>
      </form>
    </div>
  );
};

ReactDOM.render(<HelloApp />, document.getElementById('root'));
