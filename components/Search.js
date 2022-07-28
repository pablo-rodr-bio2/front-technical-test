import { useEffect, useState } from "react"

export function Search({ setQuery }) {

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
  

  const handleQuery = (event) => {
    event.target.value === '' ? setQuery() :  setQuery(event.target.value)
  }

  // const [query, setQuery] = useState(null)
  // useEffect(() => {
  //   fetch(`https://dummyjson.com/products/search?q=${query}&limit=9`)
  //   .then(res => res.json())
  //   .then(filteredProducts => {
  //     setFilteredProducts(filteredProducts.products)
  //     setTotal(parseInt(filteredProducts.total))
  //   })
  // }, [query])

  return (
    <div style={parent}>      
        <h1 style={title}>vinissimus</h1>
        <input style={barStyle}
          placeholder="Look for names"
          onChange={handleQuery} />
    </div>
  )
}
