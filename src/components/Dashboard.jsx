import React from "react";
import products_datas from "../datas/product_datas";
import Product_list from "./product_list";

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-center gap-10 flex-wrap mt-15 mb-10">
        {products_datas.map((product) => (
          <Product_list key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
