import React, { useState, useEffect } from 'react';
import Loading from './Loading';

function Bills() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); // Simulate a loading delay
      }, 1000000); // Adjust the time as needed
  
      return () => clearTimeout(timer); // Clean up timer on component unmount
    }, []);
  
    return (
      <div>
        {loading ? (
          <Loading /> // Show loading animation
        ) : (
          <div>
            <h1 className="text-2xl font-bold">Bills Page</h1>
            <p>This is the Bills Page. Manage your bills here.</p>
          </div>
        )}
      </div>
    );
}

export default Bills;
