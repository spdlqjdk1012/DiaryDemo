import React from 'react';
import {useState} from 'react';
const UseStateSample = () => {
  const [names, setNames] = useState(['홍길동', '김민수']);
  
  //콜백형태
  const [test, setTest] = useState(()=>{
    return ['홍길동']
  })
  const [input, setInput] = useState('');
  const handleUpload = () => {
    setNames((prevState)=> {
      return [input, ...prevState];
    })
  };

  return (
    <div>
      <input type="text" onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={handleUpload}>Upload</button>

      {names &&
        names.map((name)=>{
          return <div>{name}</div>
        })
      }
    </div>
  )
}

export default UseStateSample
