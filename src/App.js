import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Agregar from './pages/agregar/agregar';
import Budget from './components/budget';
import Ahorros from './pages/ahorros/ahorros';
import Grafico from './components/grafico';
import Historial from './pages/historial/Historial';

function App() {
  const [transactions, setTransactions] = useState([]);
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
      setTimeout(() => setMessage(""), 5000);
     
      return;
    }
    
    setTransactions([...transactions, transaction]);
    setMessage("Transacción agregada correctamente!");
    setTimeout(() => setMessage(""), 3000);
    
  };
 
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  
  

  return (
    <Router>
      <div className="container">
        <h1 className="text-center my-4">Thrift It</h1>
        
        {/* Barra de navegación */}
        <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
      <Nav.Item>
        <Nav.Link>
        <Link to="/"> Inicio  </Link> 
        </Nav.Link>
      </Nav.Item>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
        <Link to="/agregar"> Nuevo movimiento  </Link> 
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
        <Link to="/historial"> Tus movimientos  </Link> 
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
        <Link to="/ahorros"> Ahorros  </Link> 
        </Nav.Link>
      </Nav.Item>
    </Nav>
        {/* Mensaje de confirmación/error */}
        {message && <div className="alert alert-info">{message}</div>}

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home transactions={transactions} totalIncome={totalIncome} totalExpenses={totalExpenses} />} />
          <Route path="/agregar" element={<Agregar onAdd={handleAddTransaction} />} />
          <Route path="/historial" element={<Historial transactions={transactions} />} />
          <Route path="/ahorros" element={<Ahorros totalIncome={totalIncome} />} />
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
