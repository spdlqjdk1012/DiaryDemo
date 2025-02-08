import React from 'react'
import {useState, useEffect, useRef} from 'react'

const UseRefSample = () => {
  const [scnt, setScnt] = useState(0);//변경되면 재렌더링됨
  const rcnt = useRef(0);//변경되도 재렌더링 안됨(갱신안되는것처럼 보임)
  const input = useRef();
  const handleState = () => {
    setScnt(scnt+1);
  };
  const handleRef = () => {
    rcnt.current = rcnt.current + 1;
  };
  const handleInput = () => {
    input.current.focus();
  }
  useEffect(()=>{
    console.log("렌더링:", input);
    //useState값이 갱신될때마다 useEffect가 바뀌니.. 
    //의존성배열없는 useEffect 내부에서 state값이 갱신된다면...
    //setScnt(scnt+1);//Maximum update depth exceeded
    rcnt.current = rcnt.current+1;//이 경우 state대신 ref 쓰는게 좋다
  });
  return (
    <div>
      <div>state: {scnt}  ref: {rcnt.current}</div>
      <button onClick={handleState}>state 올려</button>
      <button onClick={handleRef}>ref 올려</button>
      <button onClick={handleInput}>input태그focus</button>
      <input ref={input} type="text"/>
    </div>
  )
}

export default UseRefSample
