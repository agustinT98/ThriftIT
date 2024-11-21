import React, { useState } from 'react';

function Agregar({ onAdd }) {
  const [type, setType] = useState('income');
  const [$amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  // Categorías dinámicas basadas en el tipo
  const categories = type === 'income'
    ? ['Salario', 'Inversiones', 'Otros ingresos']
    : ['Alquiler', 'Comida', 'Transporte', 'Otros gastos'];

  const handleSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      type,
      amount: parseFloat($amount),
      category,
    };

    onAdd(transaction);
    setAmount('');
    setCategory('');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Nuevo movimiento</h5>
        <form onSubmit={handleSubmit}>
          {/* Campo de monto */}
          <div className="form-group">
            <label htmlFor="amount">Monto</label>
            <input
              type="number"
              id="amount"
              className="form-control"
              value={$amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="$0000"
            />
          </div>

          {/* Selección de tipo */}
          <div className="form-group my-3">
            <label>Tipo</label>
            <select
              className="form-control"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                setCategory(''); // Reiniciar categoría al cambiar tipo
              }}
            >
              <option value="income">Ingreso</option>
              <option value="expense">Egreso</option>
            </select>
          </div>

          {/* Selección de categoría dinámica */}
          <div className="form-group my-3">
            <label htmlFor="category">Selecciona una categoría:</label>
            <select
              id="category"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">--Seleccionar--</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Mostrar categoría seleccionada */}
          {category && <p>Categoría seleccionada: {category}</p>}

          {/* Botón de agregar */}
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Agregar;
