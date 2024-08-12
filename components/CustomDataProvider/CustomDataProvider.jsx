"use client"
import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

export function CustomDataComponent(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjQ1Mzk5NzAsInN0b3JlTmFtZSI6ImVuIn0.cqTzXWyPPAP5NHpSX3UndP8mHa74ptZ9_WERa3VM03A'
      };
      const url = `https://bb-api.v4tech.com/api/v1/search/products/facets/category/${props?.catId}?pageNo=1&pageSize=10&sortBy=price&sortDir=desc`
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
  console.log(data)

  if (!data) return <div>Loading...</div>;

  // Render your component using the fetched data
  return (
    <div className='flex gap-2 overflow-auto'>
      {/* Use the data here */}
      {data?.data?.products?.slice(0,10)?.map(p => <ProductCard product={p} key={p?.sku} />)}
    </div>
  );
}