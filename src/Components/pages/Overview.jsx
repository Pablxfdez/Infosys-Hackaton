import React from 'react';
import PieChart from '../PieChart';
import BarChart from '../BarChart';

const Overview = ({ setLoading }) => {
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }, [setLoading]);

  return (
    <div className="w-fit">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Transaction Status</h2>
          <div className="flex justify-between items-center">
            <div className="pie-chart-container w-full">
              <PieChart />
            </div>
            <div className="placeholder-chart">
              <p className="text-center text-gray-500">Future Chart</p>
            </div>
          </div>
          <div className="mt-4 pie-chart-legend">
            <h3 className="text-lg font-semibold mb-2">Legend</h3>
            <ul>
              <li><span style={{ color: 'rgba(75, 192, 192, 1)' }}>•</span> Accepted</li>
              <li><span style={{ color: 'rgba(255, 99, 132, 1)' }}>•</span> Rejected</li>
              <li><span style={{ color: 'rgba(255, 206, 86, 1)' }}>•</span> Fraudulent</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-6 mt-6">
          <h2 className="text-xl font-bold mb-4">Additional Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <BarChart title="Email Statistics" />
            <BarChart title="Fraud Throughout the Year" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;