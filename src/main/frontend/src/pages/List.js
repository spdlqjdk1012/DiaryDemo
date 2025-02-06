import React from 'react'
import axios from 'axios';
import styles from '../styles/codingeducation.webflow.css'
const List = () => {
    const fetchDiaries = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/diary/getDiaries');
          console.log(response.data); // 서버에서 받은 다이어리 데이터 출력
        } catch (error) {
          console.error('Error fetching diaries:', error);
        }
      };
      
      fetchDiaries();
      
  return (
    <body className="body">
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
                <li className="diarylist-li">
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
                        <div className="txt-list ell01">titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle</div>
                    </div>
                    <div className="content-box">
                        <div className="txt-list ell02">This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.</div>
                    </div>
                    </div>
                </a>
                </li>
                <li className="diarylist-li">
                <a href="#" className="diarylist-item w-inline-block">
                    <div className="item-left">
                    <div className="day-box">
                        <div className="txt-list">화요일</div>
                    </div>
                    <div className="date-box">
                        <div className="txt-list">00월 00일</div>
                    </div>
                    </div>
                    <div className="item-right">
                    <div className="title-box">
                        <div className="txt-list ell01">제목제목제목제목제목제목제목제목제목제목제목</div>
                    </div>
                    <div className="content-box">
                        <div className="txt-list ell02">여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.여기에 내용을 적어주세요.</div>
                    </div>
                    </div>
                </a>
                </li>
                <li className="diarylist-li">
                <a href="#" className="diarylist-item w-inline-block">
                    <div className="item-left">
                    <div className="day-box">
                        <div className="txt-list">수요일</div>
                    </div>
                    <div className="date-box">
                        <div className="txt-list">00월 00일</div>
                    </div>
                    </div>
                    <div className="item-right">
                    <div className="title-box">
                        <div className="txt-list ell01">numbertitlenumbertitlenumbertitlenumbertitlenumbertitlenumbertitlenumbertitlenumbertitlenumbertitlenumbertitle</div>
                    </div>
                    <div className="content-box">
                        <div className="txt-list ell02">1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890</div>
                    </div>
                    </div>
                </a>
                </li>
                <li className="diarylist-li">
                <a href="#" className="diarylist-item w-inline-block">
                    <div className="item-left">
                    <div className="day-box">
                        <div className="txt-list">목요일</div>
                    </div>
                    <div className="date-box">
                        <div className="txt-list">00월 00일</div>
                    </div>
                    </div>
                    <div className="item-right">
                    <div className="title-box">
                        <div className="txt-list ell01">symbolstitlesymbolstitlesymbolstitlesymbolstitlesymbolstitlesymbolstitlesymbolstitlesymbolstitlesymbolstitle</div>
                    </div>
                    <div className="content-box">
                        <div className="txt-list ell02">! @ # $ % ^ &amp; * ( ) _ = + \ / &lt; &gt; : ; &#x27; &quot; ★ ☆ ※ ○ ● ◎ ▲ △ → ← ↑ ↓ ↔ ☎ ☜ ☞ ± ∂ ㉠ ㉡ ㉢ ㉣ ㉤ ㉦ ㉧ ㉨ ㉩ ㉪ ㉫ ㉬ ㉭ 【 】 『 』 《 》 ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ① ② ③ ⒜ ⒝ ⒞ ⑴ ⑵ ⑶</div>
                    </div>
                    </div>
                </a>
                </li>
                <li className="diarylist-li">
                <a href="#" className="diarylist-item w-inline-block">
                    <div className="item-left">
                    <div className="day-box">
                        <div className="txt-list">금요일</div>
                    </div>
                    <div className="date-box">
                        <div className="txt-list">00월 00일</div>
                    </div>
                    </div>
                    <div className="item-right">
                    <div className="title-box">
                        <div className="txt-list ell01">UppercaseUppercaseUppercaseUppercaseUppercaseUppercaseUppercaseUppercaseUppercase</div>
                    </div>
                    <div className="content-box">
                        <div className="txt-list ell02">ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                    </div>
                    </div>
                </a>
                </li>
                <li className="diarylist-li">
                <a href="#" className="diarylist-item w-inline-block">
                    <div className="item-left">
                    <div className="day-box">
                        <div className="txt-list">토요일</div>
                    </div>
                    <div className="date-box">
                        <div className="txt-list">00월 00일</div>
                    </div>
                    </div>
                    <div className="item-right">
                    <div className="title-box">
                        <div className="txt-list ell01">lowercaselowercaselowercaselowercaselowercaselowercaselowercase</div>
                    </div>
                    <div className="content-box">
                        <div className="txt-list ell02">abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</div>
                    </div>
                    </div>
                </a>
                </li>
                <li className="diarylist-li">
                <a href="#" className="diarylist-item w-inline-block">
                    <div className="item-left">
                    <div className="day-box">
                        <div className="txt-list">일요일</div>
                    </div>
                    <div className="date-box">
                        <div className="txt-list">00월 00일</div>
                    </div>
                    </div>
                    <div className="item-right">
                    <div className="title-box">
                        <div className="txt-list ell01">title테스트title테스트title테스트title테스트title테스트title테스트title테스트</div>
                    </div>
                    <div className="content-box">
                        <div className="txt-list ell02">테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest테스트TESTtest</div>
                    </div>
                    </div>
                </a>
                </li>
            </ul><button className="btn-write"></button>
            </div>
        </div>
        </main>
    </div>
  </body>
  )
}

export default List
