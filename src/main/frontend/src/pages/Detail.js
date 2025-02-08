import React, { useEffect } from 'react'
import '../styles/codingeducation.webflow.css'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const navigate = useNavigate(); 
  
  const { id } = useParams();
  const [board, setBoard] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoard(prev=>({
        ...prev,
        [name]: value
    }))
  }
  const handleUpdate = async () => {
    const res = await axios.put(`http://localhost:8080/api/diary/updateDiary/${id}`, board);
    alert(res.data);
    //setBoard(res);
  }

  useEffect(()=>{
    const fetchDiary = async() => {
        const res = await axios.get(`http://localhost:8080/api/diary/getDiary/${id}`)
        setBoard(res.data);
    };
    fetchDiary();
  }, [])

  const handleBack = () => {
    navigate("/list");
  }

  return (
    <div className="body">
        <div className="wrapper">
            <main className="main">
            <div className="container">
                <div className="main-diaryinside">
                <div className="sticker-area">
                    <img src={process.env.PUBLIC_URL+'/img/cloud.png'} loading="lazy" alt="" className="sticker-inside inside-cloud"/>
                    <img src={process.env.PUBLIC_URL+'/img/blur.png'} loading="lazy" alt="" className="sticker-inside inside-cloudsun"/>
                    <img src={process.env.PUBLIC_URL+'/img/balloon.png'} loading="lazy" alt="" className="sticker-inside inside-balloon"/>
                    <img src={process.env.PUBLIC_URL+'/img/balloon.png'} loading="lazy" alt="" className="sticker-inside inside-balloon"/>
                    <img src={process.env.PUBLIC_URL+'/img/book.png'} loading="lazy" alt="" className="sticker-inside inside-book"/>
                    <img src={process.env.PUBLIC_URL+'/img/post.png'} loading="lazy" alt="" className="sticker-inside inside-btm"/>
                </div>
                <div
                    onClick = {handleBack}
                    className="icon-box w-inline-block" 
                    style={{ maxWidth: "100%", display:"inline-block" }}>
                    <img src={process.env.PUBLIC_URL+'/img/back_icon.svg'} loading="lazy" className="icon-back"/>
                </div>
                <div className="content">
                    <div className="form-block w-form">
                    <form id="wf-form-frm__diary" name="wf-form-frm__diary" data-name="frm__diary" method="post" data-wf-page-id="667a5ef5820ccd774482da31" data-wf-element-id="3e51bd16-9b82-fc1e-0063-95899a22806d">
                        <figure className="figure">
                        <div className="figure-box">
                            <img src={process.env.PUBLIC_URL+'/img/dinosaur2.png'} loading="lazy" alt="" className="img-upload"/>
                            <img src={process.env.PUBLIC_URL+'/img/listimage3.png'} loading="lazy" alt="" className="img-upload"/>
                        </div>
                        <figcaption className="figcaption">
                            <input className="input-date w-input"  placeholder="2024년 00월 00일" type="text"/>
                            
                            <input className="input-title w-input" 
                            value={board.title} type="text"
                            name="title"
                            onChange={handleChange}/>

                            <textarea name="content" 
                            className="textarea-notes w-input"
                            value={board.content}
                            onChange={handleChange}></textarea>
                        </figcaption>
                        </figure>
                    </form>
                    <div className="w-form-done"></div>
                    <div className="w-form-fail"></div>
                    </div>
                </div>
                <div className="etc">
                    <a href="#" className="etc-item w-inline-block">
                        <img src={process.env.PUBLIC_URL+'/img/mike_icon.svg'} loading="lazy" alt="" className="icon-etc"/>
                    </a>
                    <a href="#" className="etc-item w-inline-block">
                        <img src={process.env.PUBLIC_URL+'/img/delete_icon.svg'} loading="lazy" alt="" className="icon-etc"/>
                    </a>
                    <a onClick={handleUpdate} className="etc-item w-inline-block">
                        <img src={process.env.PUBLIC_URL+'/img/correction_icon.svg'} loading="lazy" alt="" className="icon-etc"/>
                    </a>
                </div>
                </div>
            </div>
            </main>
        </div>
    </div>
  )
}

export default Detail
