import React, { useState, useEffect } from 'react';
import Loading from './Loading';

function Goals() {
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
          <h1 className="text-2xl font-bold">Goals Page</h1>
          <p>This is the Goals Page. Manage your goals here.</p>
        </div>
      )}
    </div>
  );
}

export default Goals;
