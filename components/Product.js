export default function Product({ title, description, thumbnail}) {
  
  return (
    <>

      <div>
        {title}
      </div>
      <div>
        {description}
      </div>
      <img src={thumbnail}/>
    </>
  )
}
