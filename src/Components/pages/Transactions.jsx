import React from 'react';

function Transactions() {
  return (
    <div className="p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Transaction ID</th>
            <th className="py-2 px-4 border-b">Customer Name</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Payment Method</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Remarks</th>
            <th className="py-2 px-4 border-b">Risk Percentage</th>
            <th className="py-2 px-4 border-b">Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">2024-01-01</td>
            <td className="py-2 px-4 border-b">T001</td>
            <td className="py-2 px-4 border-b">John Doe</td>
            <td className="py-2 px-4 border-b">$100.00</td>
            <td className="py-2 px-4 border-b">Completed</td>
            <td className="py-2 px-4 border-b">Credit Card</td>
            <td className="py-2 px-4 border-b">New York</td>
            <td className="py-2 px-4 border-b">Accepted</td>
            <td className="py-2 px-4 border-b">12.5%</td>
            <td className="py-2 px-4 border-b"><button className="border-2 border-blue-500 py-1 px-2 rounded">Info</button></td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2024-01-02</td>
            <td className="py-2 px-4 border-b">T002</td>
            <td className="py-2 px-4 border-b">Jane Smith</td>
            <td className="py-2 px-4 border-b">$252.97</td>
            <td className="py-2 px-4 border-b">Pending</td>
            <td className="py-2 px-4 border-b">PayPal</td>
            <td className="py-2 px-4 border-b">Los Angeles</td>
            <td className="py-2 px-4 border-b">Verification required</td>
            <td className="py-2 px-4 border-b">63.6%</td>
            <td className="py-2 px-4 border-b"><button className="border-2 border-blue-500 py-1 px-2 rounded">Info</button></td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2024-01-03</td>
            <td className="py-2 px-4 border-b">T003</td>
            <td className="py-2 px-4 border-b">Alice Johnson</td>
            <td className="py-2 px-4 border-b">$150.54</td>
            <td className="py-2 px-4 border-b">Failed</td>
            <td className="py-2 px-4 border-b">Debit Card</td>
            <td className="py-2 px-4 border-b">Chicago</td>
            <td className="py-2 px-4 border-b">Fraudulent</td>
            <td className="py-2 px-4 border-b">81.2%</td>
            <td className="py-2 px-4 border-b"><button className="border-2 border-blue-500 py-1 px-2 rounded">Info</button></td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2024-01-04</td>
            <td className="py-2 px-4 border-b">T004</td>
            <td className="py-2 px-4 border-b">Teddy Brown</td>
            <td className="py-2 px-4 border-b">$302.53</td>
            <td className="py-2 px-4 border-b">Completed</td>
            <td className="py-2 px-4 border-b">Bank Transfer</td>
            <td className="py-2 px-4 border-b">Houston</td>
            <td className="py-2 px-4 border-b">Accepted</td>
            <td className="py-2 px-4 border-b">28.3%</td>
            <td className="py-2 px-4 border-b"><button className="border-2 border-blue-500 py-1 px-2 rounded">Info</button></td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">2024-01-01</td>
            <td className="py-2 px-4 border-b">T001</td>
            <td className="py-2 px-4 border-b">John Doe</td>
            <td className="py-2 px-4 border-b">$9000.00</td>
            <td className="py-2 px-4 border-b">Completed</td>
            <td className="py-2 px-4 border-b">Credit Card</td>
            <td className="py-2 px-4 border-b">New York</td>
            <td className="py-2 px-4 border-b">Fraudulent</td>
            <td className="py-2 px-4 border-b">89.3%</td>
            <td className="py-2 px-4 border-b"><button className="border-2 border-blue-500 py-1 px-2 rounded">Info</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
