import React, { useState } from 'react';
import './App.css';
import Agregar from './components/agregar';
import Budget from './components/budget';
import Ahorros from './components/ahorros';
import Grafico from './components/grafico';

function App() {
  const [transactions, setTransactions] = useState([])

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div>
      <h1>Mis Finanzas</h1>
      <Agregar onAdd={handleAddTransaction} />
      <Budget totalIncome={totalIncome} totalExpenses={totalExpenses} />
      <h2>Historial de Transacciones</h2>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            {t.type === 'income' ? 'Ingreso' : 'Egreso'}: ${t.amount}
          </li>
        ))}
      </ul>
      <Ahorros totalIncome={totalIncome} />
      <Grafico transactions={transactions} />
    </div>
    

  );
}

export default App;
