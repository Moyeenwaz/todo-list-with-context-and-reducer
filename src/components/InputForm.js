import React, { useContext, useRef } from 'react';
import { AppContext } from '../store/app-context.js';

import Button from './UI/Button';

const InputForm = () => {
  const inputRef = useRef();
  const { dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value.trim().length < 1) return;
    dispatch({ type: 'ADD_TODO', payload: value });
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <Button>+ Add</Button>
    </form>
  );
};

export default InputForm;
