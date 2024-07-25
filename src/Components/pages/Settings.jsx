import React, { useState, useEffect } from 'react';
import Loading from './Loading';

function Settings() {
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
          <h1 className="text-2xl font-bold">Settings Page</h1>
          <p>This is the Settings Page. Adjust your settings here.</p>
        </div>
      )}
    </div>
  );
}

export default Settings;
