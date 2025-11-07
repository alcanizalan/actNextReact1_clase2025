import React from "react";
import ProductList from "@/components/shared/header/product/product-list"
import sampleData from '@/app/db/sample-data'

export default function Home() {
  return (
    <div>
      <p></p>
      <ProductList data={sampleData.products} title="Mi Lista" limit={4}/>
    </div>
  );
}
