import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';


const Home = () => {
  const [stringg, setstringg] = useState("");//존재 여부
  // 날짜 부분을 원하는 형식 'YYYY.MM.DD'에 맞게 재배열
  const formattedDate = moment().format('YYYY-MM-DD');


  const baseUrl = "http://ec2-15-164-210-112.ap-northeast-2.compute.amazonaws.com:8080";
  useEffect(() => {

    fetchDiaryData();
  }, []);

  const fetchDiaryData = () => {
    axios.get(baseUrl+`/home?date=${formattedDate}`)
        .then((res) => {
          console.log(res.data);
          setstringg(res.data.stringg);
        })
        .catch((error) => {
          console.error('Error fetching diary data:', error);
        });
  };
  const diaryButton = stringg==="1" ? (
      <Link
          to={`/diary?date=${moment(formattedDate).format("YYYY-MM-DD")}`}
          className="mx-auto rounded-md bg-indigo-500 px-2.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-center"
      >
        View Diary
      </Link>
  ) : (
      <Link
          to={`/write?date=${moment(formattedDate).format("YYYY-MM-DD")}`}
          className="mx-auto rounded-md bg-indigo-500 px-2.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-center"
      >
        Write Diary
      </Link>
  );
  return (
      <>
        <div className="flex flex-col align-middle text-center h-full ">
          <div className="flex flex-col justify-center gap-4 align-middle text-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Link to={`/alarm`}>
                <img className="w-8 rounded-lg cursor-pointer" src="/images/alarmhome.png" alt="sub" style={{float:'right'}}/>

              </Link>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Home
              </h2>
            </div>

            <div className="border-b">
              <div className="mt-1">
                <div className="flex flex-col gap-2 py-2">

                  <div className="ring-1 ring-gray-300 rounded-lg p-4 w-full">
                    <div className="font-extrabold text-l" style={{ float: 'left', marginTop:"3px"}}>{formattedDate}</div>
                    <div className="font-extrabold text-xl" style={{ float: 'right' }}>
                      {diaryButton}
                    </div>
                    <div style={{ clear: 'both' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-row text-center items-center pl-16">
              <h1 className="mt-2 text-s font-semibold leading-6 tracking-tight text-gray-900 text-center">
                Recommendations
              </h1>
              <Link to="/recommendations">
                <img className="rounded-lg mt-2 ml-2" src="/images/arrow.png" style={{width:'10px'}}></img>
              </Link>
            </div>
            <div className="ring-1 ring-gray-200 rounded-lg p-3 w-full">
              <div className="ring-1 ring-gray-300 rounded-lg p-3 w-full text-left text-sm mb-4">마시는 카페인을 줄일 필요가 있어요.</div>
              <div className="ring-1 ring-gray-300 rounded-lg p-4 w-full text-left text-sm">운동 량을 늘리시면 수면 점수를 개선할 수 있습니다.</div>
            </div>
          </div>
        </div>
        <BottomBar />
      </>
  );
};

export default Home;
