// Ahorros.js
import React from 'react';

const Ahorros = ({ totalIncome, totalAhorros }) => {
  return (
    <div>
      <h2>Ahorros</h2>
      <p>Total de Ingresos: ${totalIncome}</p>
      <p>Ahorros estimados: ${totalAhorros}</p>
    </div>
  );
};

export default Ahorros;
