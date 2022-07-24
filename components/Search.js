
export function Search({ stateChanger }) {

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

  return (
    <div style={parent}>
      
        <h1 style={title}>vinissimus</h1>
        <input style={barStyle}
          placeholder="Look for names"
          onChange={e => stateChanger(e.target.value)} />
    </div>
  )
}
