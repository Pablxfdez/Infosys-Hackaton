import React, { useState, useEffect } from 'react';
import Loading from './Loading';

function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1 className="text-2xl font-bold">Projects Page</h1>
          <p>This is the Projects Page. Manage your projects here.</p>
        </div>
      )}
    </div>
  );
}

export default Projects;
