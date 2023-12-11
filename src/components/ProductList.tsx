import React, { useEffect, useState } from "react";

// using inline interface { category }: { category: string }
const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);
  // - The 2nd arg to the effect hook is the dependencies array
  //   - if you leave it out, react will execute our effect after every render like a loop
  //   - if we pass an empty array, react will execute our effect only once the first time our component is rendered
  //   - if you add one or more values here, which can be props or state variables, React will rerun our effect every time any of these values change

  return <div>ProductList</div>;
};

export default ProductList;
