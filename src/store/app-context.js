import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const updatedTodos = [
        ...state.todos,
        {
          id: Math.random() * 1000,
          name: action.payload,
          completed: false,
        },
      ];
      return {
        ...state,
        todos: updatedTodos,
      };
    case 'DELETE_TODO':
      const filteredTodos = state.todos.filter(
        (curr) => curr.id !== action.payload
      );
      return {
        ...state,
        todos: filteredTodos,
      };

    case 'TOGGLE_TODO':
      const updated = state.todos.map((curr) => {
        if (curr.id === action.payload) {
          return { ...curr, completed: !curr.completed };
        }
        return curr;
      });
      return {
        ...state,
        todos: updated,
      };
    case 'EDIT_TODO':
      const withNewName = state.todos.map((curr) => {
        if (curr.id === action.payload.id) {
          return { ...curr, name: action.payload.value };
        }
        return curr;
      });
      return {
        ...state,
        todos: withNewName,
      };
    default:
      return state;
  }
};

const initialState = {
  todos: [
    { id: Math.random() * 1000, name: 'Walk the dog', completed: false },
    { id: Math.random() * 1000, name: 'Wash the car', completed: false },
    { id: Math.random() * 1000, name: 'Tame the bush', completed: false },
  ],
};
export const AppContext = React.createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        todos: state.todos,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
