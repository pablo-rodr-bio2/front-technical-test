import React from 'react'

export function Pagination({ nButtons, setSkip }) {

  const totalButtons = Math.floor(nButtons/9)
  
  return (
    <>
      {[...Array(totalButtons)].map((e, i) => {
        return <button key={i+1} onClick={() => setSkip(i+1)}> {i+1}</button>
      })}
          
    </>
  )
}
