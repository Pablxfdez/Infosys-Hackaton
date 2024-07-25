import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ title }) => {
  let data;
  let options;

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14 // Increased font size for legend
          }
        }
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 18 // Increased font size for title
        }
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12 // Increased font size for x-axis labels
          }
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12 // Increased font size for y-axis labels
          },
          callback: function(value) {
            return value.toLocaleString();
          }
        }
      }
    }
  };

  if (title === "Email Statistics") {
    data = {
      labels: ['Num Emails Sent', 'Num Emails Replied', 'Num Fraud Replies'],
      datasets: [
        {
          label: title,
          data: [1090000, 654000, 38150],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    options = {
      ...commonOptions,
      // Add any specific options for this chart here
    };
  } else if (title === "Fraud Throughout the Year") {
    data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: title,
          data: [3000, 3500, 4000, 3800, 4200, 4500, 5000, 4800, 4600, 4300, 4100, 3900],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
    options = {
      ...commonOptions,
      // Add any specific options for this chart here
    };
  }

  return (
    <div className="bar-chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;