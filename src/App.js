import React from 'react';
import './App.css';
import { Header } from './components/header'
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/incomeexpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
