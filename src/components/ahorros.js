import React, { useState } from 'react';

const Ahorros = ({totalIncome}) => {
    const [porcentajeAhorros, setPorcentajeAhorros] = useState(0);

    const handlePercentageChange = (e) => {
        setPorcentajeAhorros(parseFloat(e.target.value) || 0);
      };

    const MontoAhorros = totalIncome * porcentajeAhorros / 100;

    return (
        <div>
        <h2>Cálculo de Ahorros</h2>
        <label>
          Porcentaje de ahorro: 
          <input
            type="number"
            value={porcentajeAhorros}
            onChange={handlePercentageChange}
          />%
        </label>
        <p>Monto a ahorrar: ${MontoAhorros.toFixed(2)}</p>
      </div>
    );    
};
export default Ahorros;