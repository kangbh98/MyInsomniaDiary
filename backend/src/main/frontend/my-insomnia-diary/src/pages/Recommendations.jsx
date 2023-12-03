import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import { useState, useEffect } from 'react';
import axios from 'axios';



const Recommendations = () => {
  const [currentDate, setCurrentDate] = useState('');
  //GET 작업 시작
  const [totalData, setTotalData] = useState(0);
  const [recentDate, setRecentDate] = useState('');
  const [averCoffIntake, setAverCoffIntake] = useState(0);
  const [averCoffBefBed, setAverCoffBefBed] = useState(0);
  const [averWorkoutTime, setAverWorkoutTime] = useState(0);
  const [averWorkoutBefBed, setAverWorkoutBefBed] = useState(0);
  const [latestSleep, setLatestSleep] = useState(0);
  const [bestSleep, setBestSleep] = useState(0);
  const [latestCoffIntake, setLatestCoffIntake] = useState(0);
  const [latestWorkoutTime, setLatestWorkoutTime] = useState(0);
  const [latestWorkoutBefBed, setLatestWorkoutBefBed] = useState(0);
  
  const baseUrl = "http://localhost:8080";
  useEffect(() => {{
      fetchRecommendationData(); 
    }
  }, []);

  const fetchRecommendationData = () => {
    axios.get(baseUrl+`/recommendation`)
    .then((response) => {
      console.log(response.data)
      setTotalData(response.data.head.totalData);
      setRecentDate(response.data.head.recentDate);
      
      setAverCoffIntake(response.data.aver.averCoffIntake);
      setAverCoffBefBed(response.data.aver.averCoffBefBed);
      setAverWorkoutTime(response.data.aver.averWorkoutTime);
      setAverWorkoutBefBed(response.data.aver.averWorkoutBefBed);
      setLatestSleep(response.data.evaluate.latestSleep);
      setBestSleep(response.data.evaluate.bestSleep);
      setLatestCoffIntake(response.data.evaluate.latestCoffIntake);
      setLatestWorkoutTime(response.data.evaluate.latestWorkoutTime);
      setLatestWorkoutBefBed(response.data.evaluate.latestWorkoutBefBed);
    })

    /* 데이터 구조
    data : {
      head : {
        totalData : 데이터 갯수(숫자)
        recentData : 최근 날짜 (문자열)
      }
      aver : {//수면점수 좋을때 평균
        averCoffIntake : 섭취량 평균 (숫자)
        averWorkoutTime : 운동시간 평균 (숫자)
        averWorkoutBefBed : 수면전 n시간 운동시간 평균 (숫자)
      }
      evaluate : {//점수비교
        latestCoffIntake : 최근 커피 섭취량(숫자)
        latestWorkoutTime : 최근 운동시간 (숫자)
        latestWorkoutBefBed : 최근 수면 전 n시간 운동 (숫자)
        latestSleep : 최근 수면 시간
        bestSleep : 위 평균들에 해당하는 최고 점수
      }
    }
    */
      .catch((error) => {
        console.error('Error fetching diary data:', error);
      });
      
  };
  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <>
      <form className="pb-32">
        <div className="space-y-4">
          <div className=" pb-12 flex flex-col">
            <h2 className="border-b mt-8 text-base font-semibold leading-7 text-gray-900 text-xl">
              Recommendations
            </h2>
            {/* Image */}
            <div className="border mt-1  p-1 ml-36 text-xs">
              <div className="">
                데이터 건 수: {totalData}건
              </div>
              <div>
                최근 데이터: {recentDate}
              </div>
            </div>

            {/* 카페인 */}
            <div className="border-b">
              <div className="mt-3s">
                <legend className="text-md font-extrabold leading-6 text-gray-900 mb-1 border-b">
                  Caffeine
                </legend>
                <div className="flex flex-col gap-2 ring-1 ring-gray-200 rounded-lg p-4 w-full text-xs">
                    <div className="pb-2 border-b">
                    {latestSleep < bestSleep && latestCoffIntake > averCoffIntake ? (
                     `1. 사용자님은 커피를 ${latestCoffIntake - averCoffIntake}mg정도  줄인다면 최대 ${((bestSleep - latestSleep) / latestSleep * 100).toFixed(2)}% 개선 가능`) : ("사용자님은 커피가 수면에 큰 영향이 없어요.")}
                     {/* 코드설명 : 만약 수면 질 좋을때보다 점수도 낮고, 커피도 더 많이먹었으면, 커피를 줄일 경우 최대*/}
                    </div>
                    <div>
                    카페인을 일찍 먹는게 수면 개선에 도움이 돼요.
                    </div>
                  </div>
                
              </div>
            </div>

            {/* 운동 */}
            <div className="border-b">
              <div className="mt-3s">
                <legend className="text-md font-extrabold leading-6 text-gray-900 mb-1 border-b">
                  Work out
                </legend>
                  <div className="flex flex-col gap-2 ring-1 ring-gray-200 rounded-lg p-4 w-full text-sm">
                  <div className="pb-2 border-b">
                  {latestSleep < bestSleep && latestWorkoutTime > averWorkoutTime ? (
                  `사용자님은 운동 시간을 ${averWorkoutTime-latestWorkoutTime}시간 정도 줄인다면 최대 ${((bestSleep - latestSleep) / latestSleep * 100).toFixed(2)}% 개선이 가능해요`
                  ) : latestSleep < bestSleep && latestWorkoutTime < averWorkoutTime ? (
                  `사용자님은 운동 시간을 ${averWorkoutTime-latestWorkoutTime}시간 정도늘린다면 최대 ${((bestSleep - latestSleep) / latestSleep * 100).toFixed(2)}% 개선이 가능해요`
                  ) : (
                  "사용자님은 운동 시간이 수면에 큰 영향이 없어요."
                  )}
                    </div>
                    <div>
                    {latestSleep < bestSleep && latestWorkoutBefBed > averWorkoutBefBed ? (
                     `사용자님은 운동을 ${latestWorkoutBefBed - averWorkoutBefBed}시간 정도 늦게한다면 최대 ${((bestSleep - latestSleep) / latestSleep * 100).toFixed(2)}% 개선이 가능해요`
                    ) : latestSleep < bestSleep && latestWorkoutBefBed < averWorkoutBefBed ? (
                   `사용자님은 운동 시간을 ${averWorkoutBefBed - latestWorkoutBefBed}시간 정도 일찍한다면 최대 ${((bestSleep - latestSleep) / latestSleep * 100).toFixed(2)}% 개선이 가능해요`
                    ) : (
                  "사용자님은 운동 시기가 수면에 큰 영향이 없어요."
        )}
                    </div>
                  </div>
                  
                
              </div>
            </div>

            {/* Graphs - 추후 */}
            <div className="border-b">
              <div className="mt-3s">
                <legend className="text-md font-extrabold leading-6 text-gray-900 mb-1 border-b">
                  Statistics
                </legend>
                  <div className="flex flex-row gap-2 ring-1 ring-gray-200 rounded-lg p-4 w-full text-sm">
                    그래프
                  </div>
                
              </div>
            </div>




          </div>
        </div>
        <div className="pl-36 border-t text-xs text-gray-500">Updated: {currentDate}</div>
            
        <div className="mt-6 pb-6 flex items-center justify-end gap-x-6">
          <Link
            to={`/calendar`}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go to Calendar
          </Link>
        </div>
      </form>
      <BottomBar />
    </>
  );
}

export default Recommendations;
