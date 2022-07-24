import Product from "./Product";

export function ProductList({ products }) {

  const productList = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center",
    gap: "1rem"
  }
  return (
    <div style={productList}>
        {products.map(product =>
          <Product key={product.id}
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail} />)}
    </div>
  )
}