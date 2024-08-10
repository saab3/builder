import React, { useEffect, useState } from 'react'

export default function ProductsSwiper() {
  const [products, setProducts] =  useState([])
  useEffect(() => {
    return async () => {
      const res = await fetch("https://api-staging.ops.blackbox.com.sa/api/v1/search/products/facets/category/3?pageNo=1&pageSize=10&sortBy=price&sortDir=desc&region=all", {headers:{"Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjQ1Mzk5NzAsInN0b3JlTmFtZSI6ImVuIn0.cqTzXWyPPAP5NHpSX3UndP8mHa74ptZ9_WERa3VM03A`}})
      setProducts(res)
    }
  }, [])
  
 
  return (
    <div>{products?.data?.products?.length}</div> 
  )
}