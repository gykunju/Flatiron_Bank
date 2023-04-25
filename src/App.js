import './App.css';
import { useState } from 'react';
import HeadBoard from './components/header';
import AddTransaction from './components/addition'
import TransactionTable from './components/table'

function App() {
  return (
    <div className="App">
      <HeadBoard /> 
      <TransactionTable  />
      <AddTransaction />
    </div>
  );
}

export default App;
