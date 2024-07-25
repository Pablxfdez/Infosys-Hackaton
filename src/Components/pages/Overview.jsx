import React from 'react';
import PieChart from '../PieChart'; // Adjust the path as needed

const Overview = ({ setLoading }) => {
  React.useEffect(() => {
    setLoading(true);
    // Simulate a delay for loading state
    setTimeout(() => setLoading(false), 1000);
  }, [setLoading]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Transaction Status</h2>
          <PieChart />
          <div className="mt-4 pie-chart-legend">
            <h3 className="text-lg font-semibold mb-2">Legend</h3>
            <ul>
              <li><span style={{ color: 'rgba(75, 192, 192, 1)' }}>•</span> Accepted</li>
              <li><span style={{ color: 'rgba(255, 99, 132, 1)' }}>•</span> Rejected</li>
              <li><span style={{ color: 'rgba(255, 206, 86, 1)' }}>•</span> Fraudulent</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
