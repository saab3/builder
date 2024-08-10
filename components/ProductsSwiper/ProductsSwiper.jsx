import React from 'react'

export default async function ProductsSwiper() {

  const products = await fetch("https://api-staging.ops.blackbox.com.sa/api/v1/search/products/facets/category/3?pageNo=1&pageSize=10&sortBy=price&sortDir=desc&region=all", {headers:{"Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTg0NTUxOTIsInN0b3JlTmFtZSI6ImFyIn0.QSvkx-kX-AjeX8s6Nd4KRurzJbhLhB9pXrZMjzJKBFQ`}})
  return (
    <div>{products?.data?.products?.length}</div> 
  )
}