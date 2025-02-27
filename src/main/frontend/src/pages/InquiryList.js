import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InquiryList = () => {    
  const BASE_URL = 'http://localhost:8080/api';
  //데이터 상태 관리
  const [inquiryData, setInquiryData] = useState([]);

  async function getInquiry() {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${BASE_URL}/board/inquiry/list`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });
        console.log("response:", response);
      return response.data.data;
    } catch (error) {
      console.error('erro:', error);
      return false;
    }
  }

  useEffect(() => {
    async function fetchInquiry() {
      try {
        const response = await getInquiry();
        
        setInquiryData(response);

      } catch (error) {
        console.error("error", error);
      } finally {
      }
    }

    fetchInquiry();

  }, []);

 

  return (
    <div>
      
    </div>
  )
}

export default InquiryList
