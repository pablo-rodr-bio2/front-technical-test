import { ProductList } from "../components/ProductList";
import { Search } from "../components/Search";
import { useState, useEffect } from "react";

export default function Home() {
  
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')

  const getAll = () => {
    const request = fetch('https://dummyjson.com/products')
    return request.then(
      response => response.json()
    )
  }

  useEffect(() => {
    getAll()
    .then(initialProducts => {
      setProducts(initialProducts.products)
    })
  }, [])

  const filterProducts = (products, query) => {
    if (query === '') return products

    return products.filter((product) => {
      const productTitle = product.title.toLowerCase()
      return productTitle.includes(query)
    })
  }

  const filteredProducts = filterProducts(products, query)

  return (
    <>
      <Search stateChanger={setQuery}/>
      <ProductList products={filteredProducts} />
    </>
  )
}
