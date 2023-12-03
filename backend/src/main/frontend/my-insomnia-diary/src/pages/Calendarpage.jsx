import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import moment from "moment";
import './Calendarpage.css'
import axios from 'axios';


const Calendarpage = () => {
  //캘린더 형식 부분
  const [selectedDate, setSelectedDate] = useState(new Date());   
  const handleDateChange = (date) => {
    setSelectedDate(date); //선택한 날짜로 날짜 바꾸기
  };
  
  const threeMonthsAgo = moment().subtract(3, 'months').toDate();
  const today = new Date();
  const formatDay = (locale, date) => {
    const formattedDay = moment(date).format('D'); // Get the day using moment without leading zeros
    return formattedDay;
  };  
  //캘린더 형식 부분 끝
  
  //데이터 있는 부분 칠하는 코드
  // Marks를 상태로 정의 :전역변수처럼 쓰면서 SpringDataSet으로 추가하려고
  const [marks, setMarks] = useState([]);
  const isHighlighted = marks.find(
    (x) => x === moment(selectedDate).format('YYYY-MM-DD')
  );//데이터 있냐 없냐 구분

  //GET부분//
  const baseUrl = "http://localhost:8080";
  const [ data, setData ] = useState('');
  
  useEffect(() => {
        springDataSet();
      },[]) //화면 실행하면 바로 get
    async function springDataSet() {
        await axios
            .get(baseUrl + "/calendar")//받고
            .then((res)=>{
              console.log(res);//콘솔한번 띄우고
              setData(res.data);//컴포넌트에 반영하고
              const receivedDates = res.data;
              const marks = receivedDates.map(date => moment(date).format('YYYY-MM-DD'));
              //혹시몰라 moment 라이브러리로 날짜 형식 바꿔서 매핑하기
              console.log(marks); //데이터 콘솔띄우고
              setMarks(marks);//컴포넌트 반영
              })
            .catch((error)=>{
                console.log(error);
                alert("데이터를 불러올 수 없습니다.");
              })
      }
 //GET부분 끝//
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-3 border-b-2 border-gray-200">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Write Your Daily
          </h2>
        </div>

        <div className="mt-2 mx-auto w-full text-center">
        <Calendar onChange={handleDateChange} value={selectedDate}formatDay={(locale, date) => formatDay(locale, date)}
        minDate={threeMonthsAgo} //날짜 범위 조정
        maxDate={today} //날짜 범위 조정
        tileClassName={({ date, view }) => {//하이라이트 반영함수
          if (marks.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return "highlight";
          }
          return null;}}
        
        ></Calendar>
        </div>

        <div className="flex flex-col gap-2 mt-3 text-center border-t-2 border-gray-200 pt-6">
          <span className="text-lg font-semibold">
            {moment(selectedDate).format("YYYY.MM.DD")}
          </span>
          <Link
          to={isHighlighted ? `/diary?date=${moment(selectedDate).format("YYYY-MM-DD")}` : '/write?date=${moment(selectedDate).format("YYYY-MM-DD")}'}
          className="mx-auto rounded-md bg-indigo-500 px-2.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-center">
          {isHighlighted ? 'Open Diary' : 'Write Sleep diary'}
          </Link>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Calendarpage;