// Ahorros.js
import React, { useState } from 'react';

const Ahorros = ({ totalIncome }) => {
  const [ahorroPorcentaje, setAhorroPorcentaje] = useState(0); // Estado para el porcentaje de ahorro

  // Calcular el total de ahorros basados en el porcentaje
  const totalAhorros = (totalIncome * ahorroPorcentaje) / 100;

  return (
    <div>
      <h2>Ahorros</h2>
      <p>Total de Ingresos: ${totalIncome}</p>

      {/* Campo para que el usuario configure el porcentaje */}
      <label>
        Porcentaje de ahorro (%):
        <input
          type="number"
          value={ahorroPorcentaje}
          onChange={(e) => setAhorroPorcentaje(Number(e.target.value))}
          min="0"
          max="100"
        />
      </label>

      <p>Ahorros estimados: ${totalAhorros.toFixed(2)}</p>
    </div>
  );
};

export default Ahorros;
