import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Grafico = ({ transactions }) => {
  // Agrupar transacciones por categoría
  const data = transactions.reduce((acc, curr) => {
    const category = curr.category || "Sin categoría";
    const existing = acc.find((item) => item.name === category);
    if (existing) {
      existing.value += curr.amount || 0;
    } else {
      acc.push({ name: category, value: curr.amount || 0 });
    }
    return acc;
  }, []);

  // Colores para las categorías
  const COLORS = [
    "#0088FE",
    "#FF8042",
    "#00C49F",
    "#FFBB28",
    "#FF4444",
    "#AAAAAA",
  ];

  return (
    <div>
      <h2>Gráfico por Categorías</h2>
      {data.length > 0 ? (
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={(entry) => `${entry.name}: $${entry.value}`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      ) : (
        <p>No hay datos para mostrar</p>
      )}
    </div>
  );
};

export default Grafico;
