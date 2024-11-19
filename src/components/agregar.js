import React, { useState } from 'react';

const Agregar = ({ onAdd }) => {
  const [type, setType] = useState('income'); // Tipo de transacción
  const [amount, setAmount] = useState('');   // Monto
  const [category, setCategory] = useState(''); // Categoría (opcional)

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los campos
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert('Por favor, ingrese un monto válido.');
      return;
    }

    // Crear la nueva transacción
    const newTransaction = {
      type,
      amount: parseFloat(amount),
      category: category || 'Sin Categoría', // Si no se agrega una categoría, asignar "Sin Categoría"
    };

    // Llamar la función onAdd pasada como prop
    onAdd(newTransaction);

    // Limpiar los campos del formulario
    setAmount('');
    setCategory('');
  };

  return (
    <div>
      <h2>Agregar Transacción</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tipo de Transacción:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Ingreso</option>
            <option value="expense">Egreso</option>
          </select>
        </label>
        <br />
        <label>
          Monto:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ingrese el monto"
          />
        </label>
        <br />
        <label>
          Categoría (opcional):
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Ingrese la categoría"
          />
        </label>
        <br />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Agregar;
