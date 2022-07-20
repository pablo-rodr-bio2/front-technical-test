import Product from "./Product";

export function ProductList({ products }) {

  return (
    <>
      {products.map(product => 
        <Product key = {product.id}
                title={product.title}
                 description= {product.description}
                 thumbnail={product.thumbnail} />)}
      
    </>
  )
}