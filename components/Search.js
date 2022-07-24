import { useEffect, useState } from "react"

export function Search({ setFilteredProducts }) {

  //styles ON 
  const parent = {
    display: 'flex',
    flexDirection: 'row'
  }
  const title = {
    width: '30%',
    textAlign: 'center'
  }
  const barStyle = {
    width: '70%',
    margin: '15px 50px 15px'
  }
  //styles off 
  
  const [query, setQuery] = useState()
  const handleQuery = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then(res => res.json())
    .then(filteredProducts => setFilteredProducts(filteredProducts.products))
  }, [query])

  return (
    <div style={parent}>      
        <h1 style={title}>vinissimus</h1>
        <input style={barStyle}
          placeholder="Look for names"
          onChange={handleQuery} />
    </div>
  )
}
