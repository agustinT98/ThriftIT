import React from 'react';

function Historial({ transactions }) {
  return (
    <div>
      <h2>Tus movimientos </h2>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            {t.type === 'income' ? 'Ingreso' : 'Egreso'}: ${t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Historial;
