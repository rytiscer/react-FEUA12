import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProducts().then((response) => {
      setTimeout(() => {
        setProducts(response);
      }, 2500);
    });
  }, []);

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <>
      {products ? (
        <div className="productsDiv">
          {products.map((product) => (
            <div key={product.id}>
              <Product
                item={product}
                onDelete={() => handleDeleteProduct(product.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <span>LOADING</span>
      )}
    </>
  );
};

export default Products;
