import { useState } from "react"

export function Search({  stateChanger }) {


  return (
    <>
      <h1>vinissimus</h1>
      <div>
      <input id="searchbar"
             placeholder="Buscar vino, denominación, uva..."
             onChange={e => stateChanger(e.target.value)} />
      </div>
      <div>
        
      </div>
    </>
  )
}
