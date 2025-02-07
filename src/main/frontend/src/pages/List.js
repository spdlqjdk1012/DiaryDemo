import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/codingeducation.webflow.css'
import { useNavigate } from 'react-router-dom';

const List = () => {

    const navigate = useNavigate();
    const [boardList, setBoardList] = useState([]);
    useEffect(()=>{
        const fetchDiaries = async() => {
            try{
                const res = await axios.get('http://localhost:8080/api/diary/getDiaries');
                setBoardList(res.data);
            }catch(e){
                console.log("error:", e);
            }
        };
        fetchDiaries();
    }, [])
    
    const handleWrite = () => {
        navigate("/write");
    }
      
  return (
    <div className="body">
        <div className="wrapper">
            <main className="main">
                <div className="container">
                    <div className="main-diarylist _01">
                        <div className="sticker-area">
                            <img src={process.env.PUBLIC_URL + '/img/listimage4.png'} loading="lazy" alt="" className="sticker-list list-top"/>
                        </div>
                        <div className="selectbox-area">
                            <div className="form-block-2 w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="667a4e2da77aacb3076df969" data-wf-element-id="1751f683-9e90-5eaa-439d-703136f196cf"><select id="field" name="field" data-name="Field" className="select-field w-select">
                                    <option value="">2024</option>
                                    <option value="First">2023</option>
                                    <option value="Second">2022</option>
                                    <option value="Third">2021</option>
                                    </select></form>
                                <div className="w-form-done"></div>
                                <div className="w-form-fail"></div>
                            </div>
                        </div>
                        <ul className="diarylist-ul">
                            {boardList&&
                                boardList.map((board)=> (
                                    <div>{board.id}</div>
                                ))
                            }
                            {boardList &&
                                boardList.map((board) => (
                                <li className="diarylist-li" key={board.idx}>
                                    <a href="#" className="diarylist-item w-inline-block">
                                        <div className="item-left">
                                        <div className="day-box">
                                            <div className="txt-list">월요일</div>
                                        </div>
                                        <div className="date-box">
                                            <div className="txt-list">00월 00일</div>
                                        </div>
                                        </div>
                                        <div className="item-right">
                                        <div className="title-box">
                                            <div className="txt-list ell01">{board.title}</div>
                                        </div>
                                        <div className="content-box">
                                            <div className="txt-list ell02">{board.content}</div>
                                        </div>
                                        </div>
                                    </a>
                                </li>   
                                ))
                            }
                        </ul>
                        <button onClick={handleWrite} className="btn-write">a</button>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default List
