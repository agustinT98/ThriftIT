import React from 'react';

function Budget({ totalIncome, totalExpenses }) {
  const balance = totalIncome - totalExpenses;
  
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Presupuesto</h5>
        <p className="card-text">Ingreso Total: ${totalIncome}</p>
        <p className="card-text">Gastos Totales: ${totalExpenses}</p>
        <p className={`card-text ${balance >= 0 ? 'text-success' : 'text-danger'}`}>
          Saldo: ${balance}
        </p>
      </div>
    </div>
  );
}

export default Budget;
