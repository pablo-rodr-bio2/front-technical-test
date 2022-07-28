import { ProductList } from "../components/ProductList";
import { Search } from "../components/Search";
import { useState, useEffect } from "react";
import { Pagination } from "../components/Pagination";

export default function Home() {
  
  const [products, setProducts] = useState([])
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState(0)
  const [query, setQuery] = useState('')

   useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}&limit=9&skip=${skip}`)
    .then(response => response.json())
    .then(initialProducts => {
      setProducts(initialProducts.products)
      setTotal(initialProducts.total)
    })
  }, [query, skip])
  

  return (
    <>
      <Search setQuery={setQuery} setSkip={setSkip}/>
      <ProductList products={products} />
      <Pagination nButtons={total} setSkip={setSkip}/>
    </>
  )
}
