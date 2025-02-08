import React from 'react'
import {useState, useEffect} from 'react'

const UseEffectSample = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [time, setTime] = useState(0);
  const [time2, setTime2] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const handleCount = () => {
    setCount(count+1);
  };

  const handleTimer = () => {
    console.log("타이머 토글 실행");
    setIsRunning(!isRunning);
    setTime(0);
    setTime2(0);
  }

  useEffect(()=>{
    console.log("렌더링마다 매번 실행");
  });

  useEffect(()=>{
    console.log("첫 렌더링 시에만 호출");
  }, []);

  useEffect(()=>{
    console.log("첫렌더링, input갱신시 호출");
  }, [input]);

  useEffect(()=>{
    const myTimer = setInterval(()=>{
      console.log("test");
      // 이 클로저는 useEffect가 생성될 때의 time 값(0)을 "기억"합니다
      //useEffect는 [] 의존성 배열로 인해 컴포넌트 마운트 시 딱 한 번만 실행됨
      //이때 생성된 setInterval의 클로저는 그 시점의 time 값(0)을 캡처
      //매 초마다 실행되는 setInterval 내부에서는 캡처된 그 0이라는 값만 계속 사용  
      setTime(time + 1);  // time은 항상 0입니다! 0+1=1

      //함수형 업데이트
      //함수형 업데이트는 React가 현재 최신 상태값을 prevTime으로 전달
      //클로저가 캡처한 값을 사용하지 않고, React가 관리하는 실제 최신 상태를 사용
      setTime2(prevTime => prevTime+1);//카운트 계속 올라가짐
    }, 1000);

    return () => {
      clearInterval(myTimer);
    }
  }, [isRunning])
  return (
    <div>
      <button onClick={handleCount}>Update</button>
      <div>Count: {count}</div>
      <div>
        <input type="text" name="name" 
        onChange={(e)=>{setInput(e.target.value)}}
        value={input}/>{input}
      </div>
      <hr></hr>
      {isRunning &&
        <div>현재 타임 {time} / time2 {time2}</div>
      }
      {!isRunning && 
        <button onClick={handleTimer}>타이머 활성화</button>
      }
      {isRunning && 
        <button onClick={handleTimer}>타이머 비활성화</button>
      }
    </div>
  )
}

export default UseEffectSample
