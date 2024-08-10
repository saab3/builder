import React from 'react'

export default async function ProductsSwiper() {
  const token = `Bearer ${process.env.NEXT_PUBLIC_HANDSHAKE}`

  const products = await fetch("https://api.ops.blackbox.com.sa/api/v1/search/products/facets/category/3?pageNo=1&pageSize=10&sortBy=price&sortDir=desc&region=all", {headers:{"Authorization": token}})
  return (
    <div>{products?.data?.products?.length}</div>
  )
}