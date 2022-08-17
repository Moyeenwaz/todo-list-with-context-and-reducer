import React, { useContext } from 'react';
import { AppContext } from '../store/app-context.js';
import Todo from './Todo';

const Todos = () => {
  const { todos } = useContext(AppContext);
  return (
    <ul>
      {todos.map((todo) => (
        <Todo name={todo.name} id={todo.id} key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
