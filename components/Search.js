import { useEffect, useState } from "react"

export function Search({ setFilteredProducts, setTotal }) {

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
  
  const [query, setQuery] = useState(null)
  const handleQuery = (event) => {
    event.target.value === '' ? setQuery(null) :  setQuery(event.target.value)
  }

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}&limit=9`)
    .then(res => res.json())
    .then(filteredProducts => {
      setFilteredProducts(filteredProducts.products)
      setTotal(parseInt(filteredProducts.total))
    })
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
