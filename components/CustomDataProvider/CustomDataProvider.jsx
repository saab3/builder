import React, { useEffect, useState } from 'react';

export function CustomDataComponent(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjQ1Mzk5NzAsInN0b3JlTmFtZSI6ImVuIn0.cqTzXWyPPAP5NHpSX3UndP8mHa74ptZ9_WERa3VM03A'
      };
      const url = `https://api-staging.ops.blackbox.com.sa/api/v1/search/products/facets/category/${props.catId}?pageNo=1&pageSize=10&sortBy=price&sortDir=desc&region=all`
      try {
        const response = await fetch(url, { headers });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [props.catId]);


  if (!data) return <div>Loading...</div>;

  // Render your component using the fetched data
  return (
    <div>
      {/* Use the data here */}
      
    </div>
  );
}