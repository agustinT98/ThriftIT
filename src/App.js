import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Agregar from './components/agregar';
import Budget from './components/budget';
import Ahorros from './components/ahorros';
import Grafico from './components/grafico';
import Historial from './components/Historial';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [ahorroPorcentaje, setAhorroPorcentaje] = useState(10);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedTransactions = sessionStorage.getItem('transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      sessionStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);

  const handleAddTransaction = (transaction) => {
    if (!transaction.amount || isNaN(transaction.amount) || transaction.amount <= 0) {
      setMessage("Por favor, ingresa un monto válido.");
      return;
    }
    
    setTransactions([...transactions, transaction]);
    setMessage("Transacción agregada correctamente!");
  };

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalAhorros = (totalIncome * ahorroPorcentaje) / 100;

  return (
    <Router>
      <div className="container">
        <h1 className="text-center my-4">Thrift It</h1>
        
        {/* Barra de navegación */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/agregar">Nuevo Movimiento </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/historial">Historial </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ahorros">Ahorros </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mensaje de confirmación/error */}
        {message && <div className="alert alert-info">{message}</div>}

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home transactions={transactions} totalIncome={totalIncome} totalExpenses={totalExpenses} />} />
          <Route path="/agregar" element={<Agregar onAdd={handleAddTransaction} />} />
          <Route path="/historial" element={<Historial transactions={transactions} />} />
          <Route path="/ahorros" element={<Ahorros totalIncome={totalIncome} totalAhorros={totalAhorros} />} />
        </Routes>
      </div>
    </Router>
  );
}

// Página Home
function Home({ transactions, totalIncome, totalExpenses }) {
  return (
    <div>
      <Budget totalIncome={totalIncome} totalExpenses={totalExpenses} />
      <Grafico transactions={transactions} />
    </div>
  );
}

export default App;
