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
    const isHighlighted = marks.some(
        (x) => x.date === moment(selectedDate).format('YYYY-MM-DD')
    );
    //GET부분//
    const baseUrl = "http://ec2-15-164-210-112.ap-northeast-2.compute.amazonaws.com:8080";
    const [ data, setData ] = useState('');
    
    useEffect(() => {
        springDataSet();
    },[]) //화면 실행하면 바로 get
    async function springDataSet() {
        await axios
        .get(baseUrl + "/calendar")
        .then((res) => {
            console.log(res);
            setData(res.data);

            const receivedDates = res.data;
            const marks = receivedDates.map((item) => ({
                date: moment(item.date).format("YYYY-MM-DD"),
                score: item.sleepTime,
            }));
            console.log(marks);
            setMarks(marks);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    //GET부분 끝//
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center pb-12">
            <div className="ml-48 text-right"> {/* Position table to the right */}
  <table style={{ width: '100px', height:'40px' }}> {/* 테이블 크기 지정 */}
    <tbody>
      <tr>
        <td className="highlight-high" style={{ borderRadius: '80%', width: '15px'}} >
        </td>
        <td style={{ fontSize:"11px" }}>8 이상</td>
        <td></td>

        <td className="highlight-medium" style={{  borderRadius: '80%', width: '15px' }}>
        </td>
        <td style={{fontSize:"11px" }}>6 이상</td>
      </tr>
      <tr> <td></td><td></td><td></td><td></td></tr>
      <tr>
        <td className="highlight-lm" style={{  borderRadius: '80%', width: '15px'}}>
        </td>

        <td style={{  fontSize:"11px" }}>3 이상</td>
        <td></td>

        <td className="highlight-low" style={{  borderRadius: '80%', width: '15px' }}>
        </td>
        <td style={{  fontSize:"11px" }}>3 미만</td>
      </tr>
    </tbody>
  </table>
</div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-3 border-b-2 border-gray-200">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Write Your Daily
                    </h2>
                </div>

                <div className="mt-1 mx-auto w-full text-center">
                <Calendar
    onChange={handleDateChange}
    value={selectedDate}
    formatDay={(locale, date) => formatDay(locale, date)}
    minDate={threeMonthsAgo}
    maxDate={today}
    tileClassName={({ date }) => {
        const found = marks.find((mark) => mark.date === moment(date).format("YYYY-MM-DD"));
        if (found) {
            const { score } = found;
            if (score >= 8) {
                return "highlight-high"; // Apply a class for high scores
            } else if (score >= 6) {
                return "highlight-medium"; // Apply a class for medium scores
            } else if (score >=3)
            {
                return "highlight-lm";
            }
            else {
                return "highlight-low"; // Apply a class for low scores
            }
        }
        return null;
    }}
/>
                </div>
                
                <div className="flex flex-col gap-2 mt-3 text-center border-t-2 border-gray-200 pt-6">
                
          <span className="text-lg font-semibold">
            {moment(selectedDate).format("YYYY.MM.DD")}
          </span>
                    <Link
                        to={isHighlighted ? `/diary?date=${moment(selectedDate).format("YYYY-MM-DD")}` :  `/write?date=${moment(selectedDate).format("YYYY-MM-DD")}`}
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