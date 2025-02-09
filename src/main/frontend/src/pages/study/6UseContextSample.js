import React from 'react'
import {useState, useEffect, useRef} from 'react'
import ProductCard2 from '../../components/study/ProductCard2'
import { ThemeContext } from '../../context/study/ThemeContext'
import { UserContext } from '../../context/study/UserContext'

const UseContextSample = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: '맥프로',
      price: 10000,
    },
    {
      id: 2,
      name: '그램',
      price: 20000,
    }
  ])
  const [isDark, setIsDark] = useState(false);
  const style = {
    backgroundColor: isDark? 'black': 'white',
    color: isDark? 'white':'black'
  }
  return (
    <UserContext.Provider value={'김말순'}>
      <ThemeContext.Provider value={isDark}>
      <div style={style}> 
        <button onClick={()=>setIsDark(!isDark)}>{isDark? '화이트모드' : '블랙모드'}</button>
        {
          products &&
            products.map(product=>(
              <ProductCard2 name={product.name} price={product.price}/>
            ))
        }
      </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

export default UseContextSample
