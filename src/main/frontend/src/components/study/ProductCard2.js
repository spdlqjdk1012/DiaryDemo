import React, {useContext} from 'react'
import { ThemeContext } from '../../context/study/ThemeContext'
import { UserContext } from '../../context/study/UserContext';
const ProductCard2 = ({ name, price }) => {
  const isDark = useContext(ThemeContext);
  const user = useContext(UserContext);
  console.log("isDark:", isDark);
  const btnStyle={
    background: isDark? 'burlywood': 'yellow'
  }
  const handleBuy = () => {
    alert(user+"님 구매하시겠습니까?");
  }
  return (
    <div>      
      <div>
        {name} : {price} 
        <button onClick={handleBuy} style={btnStyle}>구매</button>
      </div>
    </div>
  )
}

export default ProductCard2
