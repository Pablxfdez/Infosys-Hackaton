import React, { useState, useEffect } from 'react';
import Loading from './Loading';

function Expenses() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1 className="text-2xl font-bold">Expenses Page</h1>
          <p>This is the Expenses Page. Track your expenses here.</p>
        </div>
      )}
    </div>
  );
}

export default Expenses;
