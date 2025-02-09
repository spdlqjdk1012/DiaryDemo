import React from 'react'
import {useState, useEffect, useRef} from 'react'
import ProductCard from '../../components/study/ProductCard';
const PropSample = () => {
  const [isDark, setIsDark] = useState(false);
  const changeTheme = () => {
    setIsDark(!isDark);
  }
  const [products, setProducts] = useState([
    {
      id:1,
      name:'맥북프로',
      price: 3600000
    },
    {
      id:2,
      name:'그램',
      price: 2600000
    }
  ]);

  const style= {
    backgroundColor: isDark? '#333' : '#fff',
    color: isDark ? '#fff' : '#333'
  }
  return (
    <div style={style}>
      <button onClick={changeTheme}>
        {isDark? '라이트모드로' : '블랙모드로'}
      </button>
      {products &&
      products.map(product => (
        <ProductCard key={product.id} name={product.name} isDark={isDark}/>        
      ))}
    </div>
  )
}

export default PropSample
