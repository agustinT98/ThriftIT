import React from "react";
import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';

const Grafico = ({transactions}) => {
    const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + (curr.amount || 0), 0);
  
  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + (curr.amount || 0), 0);
  
  const data = [
    { name: 'Ingresos', value: totalIncome || 0 },
    { name: 'Egresos', value: totalExpenses || 0 },
  ];
  

    const COLORS = ['#0088FE', '#FF8042'];
    
    return (
        <div>
          <h2>Reporte Financiero</h2>
          {data.every((d) => d.value >= 0) ? (
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          ) : (
            <p>No hay datos válidos para mostrar</p>
          )}
        </div>
      );
      
};
export default Grafico;