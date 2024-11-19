const Budget = ({ totalIncome, totalExpenses }) => {
  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h3>Resumen de Finanzas</h3>
      <p><strong>Total Ingresos:</strong> ${totalIncome.toFixed(2)}</p>
      <p><strong>Total Gastos:</strong> ${totalExpenses.toFixed(2)}</p>
      <p><strong>Saldo Restante:</strong> ${balance.toFixed(2)}</p>
    </div>
  );
};

export default Budget;
