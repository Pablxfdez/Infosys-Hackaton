import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
  const data = {
    labels: ['Accepted', 'Rejected', 'Fraudulent'],
    datasets: [
      {
        label: 'Transaction Status',
        data: [60, 25, 15], // Example data
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)', // Accepted
          'rgba(255, 99, 132, 0.7)', // Rejected
          'rgba(255, 206, 86, 0.7)'  // Fraudulent
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
