import React, { useContext, useState } from 'react';
import { AppContext } from '../store/app-context.js';
import Edit from './Edit';

const Todo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const { dispatch } = useContext(AppContext);
  const { name, id, todo } = props;
  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };
  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = (value) => {
    setIsEditing(false);
    if (value.trim().length < 1) return;
    dispatch({ type: 'EDIT_TODO', payload: { id: id, value: value } });
  };

  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const complete = {
    textDecoration: todo.completed ? 'line-through' : 'none',
  };
  return (
    <>
      {isEditing ? (
        <Edit handleSave={handleSave} />
      ) : (
        <li style={styles}>
          <div style={complete}>{name}</div>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleToggle}>Tog</button>
            <button onClick={handleDelete}>Del</button>
          </div>
        </li>
      )}
    </>
  );
};

export default Todo;
