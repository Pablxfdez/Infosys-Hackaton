import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GreyPieChart = () => {
  const data = {
    labels: ['Coming Soon'],
    datasets: [
      {
        data: [100],
        backgroundColor: ['rgba(200, 200, 200, 0.8)'],
        borderColor: ['rgba(180, 180, 180, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="grey-pie-chart-container">
      <Pie data={data} options={options} />
      <div className="coming-soon-text">Coming Soon</div>
    </div>
  );
};

export default GreyPieChart;
