import { ProductList } from "../components/ProductList";
import { Search } from "../components/Search";
import { useState, useEffect } from "react";

export default function Home() {
  
  const [allProducts, setAllProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const getAll = () => {
    const request = fetch('https://dummyjson.com/products')
    return request.then(
      response => response.json()
    )
  }

  useEffect(() => {
    getAll()
    .then(initialProducts => {
      setAllProducts(initialProducts.products)
    })
  }, [])

  const productsToShow = filteredProducts.length > 0 ? filteredProducts : allProducts

  return (
    <>
      <Search setFilteredProducts={setFilteredProducts}/>
      <ProductList products={productsToShow} />
    </>
  )
}
