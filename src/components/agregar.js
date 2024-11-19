import React, { useState } from 'react';

function Agregar({ onAdd }) {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = { type, amount: parseFloat(amount) };
    onAdd(transaction);
    setAmount('');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Agregar Transacción</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount">Monto</label>
            <input 
              type="number" 
              id="amount" 
              className="form-control" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group my-3">
            <label>Tipo</label>
            <select 
              className="form-control" 
              value={type} 
              onChange={(e) => setType(e.target.value)}
            >
              <option value="income">Ingreso</option>
              <option value="expense">Egreso</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
      </div>
    </div>
  );
}

export default Agregar;
