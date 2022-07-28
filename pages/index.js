import { ProductList } from "../components/ProductList";
import { Search } from "../components/Search";
import { useState, useEffect } from "react";
import { Pagination } from "../components/Pagination";

export default function Home() {
  
  const [allProducts, setAllProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState(0)
  const [query, setQuery] = useState()

  const getAll = () => {
    const request = fetch(`https://dummyjson.com/products?limit=9&skip=${skip}`)
    return request.then(
      response => response.json()
    )
  }

  useEffect(() => {
    getAll()
    .then(initialProducts => {
      setAllProducts(initialProducts.products)
      setTotal(initialProducts.total)
    })
  }, [skip])

  const productsToShow = filteredProducts.length > 0 ? filteredProducts : allProducts  

  return (
    <>
      <Search setQuery={setQuery}/>
      <ProductList products={productsToShow} />
      <Pagination nButtons={total} setSkip={setSkip}/>
    </>
  )
}
