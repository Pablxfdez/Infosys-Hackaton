import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
  const data = {
    labels: ['Not Fraudulent', 'Potentially Fraudulent', 'Fraudulent'],
    datasets: [
      {
        label: 'Transaction Status',
        data: [90.35, 4.72, 100-90.35-4.72], // Example data
        backgroundColor: [
          'rgba(0, 100, 0, 0.7)', // Accepted
          'rgba(255, 206, 86, 0.7)', // Rejected
          'rgba(255, 0, 0, 0.7)'  // Fraudulent
        ],
        borderColor: [
          'rgba(0, 100, 0, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend as we're using a custom one
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