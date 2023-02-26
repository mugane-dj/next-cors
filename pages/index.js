import React, { useState, useEffect } from 'react';

function TokenPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchToken() {
      const response = await fetch('/api/account');
      const res_data = await response.json();
      setData(res_data);
    }

    fetchToken();
  }, []);


  return <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>;
}

export default TokenPage;
