import Image from 'next/image'

export default function Product({ title, description, thumbnail}) {
  
  const productCard = {
    border: '1px solid rgba(0, 0, 0, 0.05)',
    flexBasis: '30vw',
    textAlign: 'center'
  }
  return (
    <div style={productCard}>
      <Image
         src={thumbnail} 
         alt={title}
         width={400}
         height={250}
      />
      <div>{title}</div>
      <div>{description}</div>
    </div>
  )
}
