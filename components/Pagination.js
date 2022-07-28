import React from 'react'

export function Pagination({ nButtons, setSkip }) {

  const totalButtons = Math.floor(nButtons/9) + 1

  const paginationStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center",
  }
  
  return (
    <div style={paginationStyle}>
      {[...Array(totalButtons)].map((e, i) => {
        return <button key={i+1} onClick={() => setSkip(i * 9)}> {i+1}</button>
      })}
    </div>
  )
}
