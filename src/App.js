import React from 'react';
import './style.css';
import InputForm from './components/InputForm';
import Todos from './components/Todos';
import { AppProvider } from './store/app-context';

export default function App() {
  return (
    <AppProvider>
      <InputForm />
      <Todos/>
    </AppProvider>
  );
}
