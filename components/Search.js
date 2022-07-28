import { useEffect, useState } from "react"

export function Search({ setQuery, setSkip }) {

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
    setQuery(event.target.value)
    setSkip(0)
  }

  return (
    <div style={parent}>      
        <h1 style={title}>vinissimus</h1>
        <input style={barStyle}
          placeholder="Look for names"
          onChange={handleQuery} />
    </div>
  )
}
