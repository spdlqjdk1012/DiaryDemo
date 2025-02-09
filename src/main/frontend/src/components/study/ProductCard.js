import React from 'react'

const ProductCard = ({ name, isDark }) => {
  const style = {
    background: isDark? 'cadetblue':'white'
  }
  return (
    <div>
      <div>{name}</div>
      <button style={style}>구매</button>
    </div>
  )
}

export default ProductCard
