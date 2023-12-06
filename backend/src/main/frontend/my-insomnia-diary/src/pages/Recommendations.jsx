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
  const [latestCoffBefBed, setLatestCoffBefBed]= useState(0);
  const [latestWorkoutTime, setLatestWorkoutTime] = useState(0);
  const [latestWorkoutBefBed, setLatestWorkoutBefBed] = useState(0);
  const [tCoffIntake, setTACoffIntake] = useState(0);
  const [tCoffBefBed, setTACoffBefBed] = useState(0);
  const [tWorkoutTime, setTAWorkoutTime] = useState(0);
  const [tWorkoutBefBed, setTAWorkoutBefBed] = useState(0);
  const [tBestSleep, setTABestSleep] = useState(0);
  const [sleepAverByWorkoutTime, setSleepAverByWorkoutTime] = useState([]);
  const [sleepAverByWorkoutBefBed, setSleepAverByWorkoutBefBed] = useState([]);

  const baseUrl = "http://localhost:8080";
  useEffect(() => {{
    fetchRecommendationData();
  }
  }, []);

  const fetchRecommendationData = () => {
    axios.get(baseUrl+`/recommendation`)
        .then((response) => {
          console.log(response.data)
          setTotalData(response.data.totalData);
          setRecentDate(response.data.recentDate);
          setAverCoffIntake(response.data.averCoffIntake);
          setAverCoffBefBed(response.data.averCoffBefBed);
          setAverWorkoutTime(response.data.averWorkoutTime);
          setAverWorkoutBefBed(response.data.averWorkoutBefBed);
          setLatestSleep(response.data.latestSleep);
          setBestSleep(response.data.bestSleep);
          setLatestCoffIntake(response.data.latestCoffIntake);
          setLatestCoffBefBed(response.data.latestCoffBefBed);
          setLatestWorkoutTime(response.data.latestWorkoutTime);
          setLatestWorkoutBefBed(response.data.latestWorkoutBefBed);
          setTACoffIntake(response.data.totalAverCoffIntake);
          setTACoffBefBed(response.data.totalAverCoffBefBed);
          setTAWorkoutBefBed(response.data.totalAverWorkoutBefBed);
          setTAWorkoutTime(response.data.totalAverWorkoutTime);
          setTABestSleep(response.data.totalBestSleep);
          setSleepAverByWorkoutTime(response.data.sleepAverByWorkoutTime);
          setSleepAverByWorkoutBefBed(response.data.sleepAverByWorkoutBefBed);
        })

        /* 데이터 구조
        data : {
            totalData : 데이터 갯수(Int)
            recentData : 최근 날짜 (문자열)

            averCoffIntake : 수면 가장 좋을 때 섭취량 평균 (double)
            averCoffBefBed : 수면 가장 좋을 때 수면 몇시간 전 커피? (double)<=얘 추가
            averWorkoutTime : 수면 가장 좋을 때 운동시간 평균 (double)
            averWorkoutBefBed : 수면 가장 좋을 때 수면전 n시간 운동시간 평균 (double)
            bestSleep : 수면 가장 좋을때 평균시간 (double)

            latestCoffIntake : 최근 커피 섭취량(Int)
            latestCoffBefBed : 수면 몇시간전 커피? 최근데이터 (Int)  <=얘 추가
            latestWorkoutTime : 최근 운동시간 (Int)
            latestWorkoutBefBed : 최근 수면 전 n시간 운동 (Int)
            latestSleep : 최근 수면 시간(Int)

            TotalAverCoffBefBed(double)<=얘추가
            ToatlAverCoffIntake(double)
            TotalAverWorkoutTime(double)
            TotalAverWorkoutBefBed(double)
            TotalBestSleep(double)

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
  const maxSleepAverT = Math.max(...sleepAverByWorkoutTime);
  const maxSleepAverTIndex = sleepAverByWorkoutTime.indexOf(maxSleepAverT) * 3;
  const maxSleepAverB = Math.max(...sleepAverByWorkoutBefBed);
  const maxSleepAverBIndex = sleepAverByWorkoutTime.indexOf(maxSleepAverB) * 3;
  return (
      <>
        <form className="pb-32">
          <div className="space-y-4">
            <div className=" pb-12 flex flex-col">
              <h2 className="border-b mt-8 text-base font-semibold leading-7 text-gray-900 text-center text-xl">
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
                    {latestSleep < tBestSleep ? (
                    // Logic when latestSleep is greater than bestSleep but less than tBestSleep
                    `사용자님은 커피를 ${latestCoffIntake - averCoffIntake}mg정도 줄여서 ${((tBestSleep - latestSleep) / latestSleep * 100).toFixed(0)}% 개선 가능`)
                    :(latestSleep < bestSleep ? (
                    // Logic when latestSleep is less than bestSleep
                    `사용자님은 커피를 ${latestCoffIntake - averCoffIntake}mg정도 줄인다면 최대 ${((bestSleep - latestSleep) / latestSleep * 100).toFixed(0)}% 개선 가능`)
                    : 
                    // Default logic when none of the above conditions are met
                    "사용자님은 커피가 수면에 큰 영향이 없어요."
                    )}
                    {/* 코드설명 : 만약 수면 질 좋을때보다 점수도 낮고, 커피도 더 많이먹었으면, 커피를 줄일 경우 최대 */}
                    </div>
                    <div>
                      카페인을 일찍 먹는게 수면 개선에 도움이 돼요.
                    </div>
                  </div>

                </div>
              </div>

              {/* 운동 */}
              <div className="border-b mt-3">
                <div className="mt-3s">
                  <legend className="text-md font-extrabold leading-6 text-gray-900 mb-1 border-b">
                    Work out
                  </legend>
                  <div className="flex flex-col gap-2 ring-1 ring-gray-200 rounded-lg p-4 w-full ">
                    <div className="pb-2 border-b text-xs">
                      {latestSleep < maxSleepAverT && latestWorkoutTime > maxSleepAverTIndex ? (
                          `사용자님은 운동 시간을 ${latestWorkoutTime-maxSleepAverT}시간 정도 줄인다면 최대 ${((maxSleepAverT - latestSleep) / latestSleep * 100).toFixed(0)}% 개선이 가능해요`
                      ) : latestSleep < bestSleep && latestWorkoutTime < averWorkoutTime ? (
                          `사용자님은 운동 시간을 ${maxSleepAverT-latestWorkoutTime}시간 정도 늘린다면 최대 ${((maxSleepAverT - latestSleep) / latestSleep * 100).toFixed(0)}% 개선이 가능해요`
                      ) : (
                          "사용자님은 운동 시간이 수면에 큰 영향이 없어요."
                      )}
                    </div>
                    <div className="text-xs">
                      {latestSleep < maxSleepAverB && latestWorkoutBefBed > maxSleepAverBIndex ? (
                          `사용자님은 운동을 ${latestWorkoutBefBed - maxSleepAverBIndex}시간 정도 늦게한다면 최대 ${((maxSleepAverB - latestSleep) / latestSleep * 100).toFixed(0)}% 개선이 가능해요`
                      ) : latestSleep < tBestSleep && latestWorkoutBefBed < maxSleepAverBIndex ? (
                          `사용자님은 운동 시간을 ${maxSleepAverBIndex - latestWorkoutBefBed}시간 정도 일찍한다면 최대 ${((maxSleepAverB - latestSleep) / latestSleep * 100).toFixed(0)}% 개선이 가능해요`
                      ) : (
                          "사용자님은 운동 시기가 수면에 큰 영향이 없어요."
                      )}
                    </div>
                  </div>


                </div>
              </div>

              {/* Graphs - 추후 */}
              <div className="border-b mt-3">
                <div className="mt-3s">
                  <legend className="text-md font-extrabold leading-6 text-gray-900 mb-1 border-b">
                    Statistics (average)
                  </legend>
                  <div className="flex flex-col rounded-lg w-full ">
                    <div className="flex flex-row  border-b text-sm font-semibold">
                      <div className="flex-1 "> </div>
                      <div className="flex-1 text-center pt-1 pb-2 ">Recent</div>
                      <div className="flex-1 text-center pt-1 pb-2">Your Best</div>
                      <div className="flex-1 text-center pt-1 pb-2">Total</div>
                    </div>
                    <div className="flex flex-row text-xs">
                      <div className="flex-1 py-2 font-semibold pl-1 border-b border-r ">Coff Intake</div>
                      <div className="flex-1 text-center pt-2">{latestCoffIntake}mg</div>
                      <div className="flex-1 text-center pt-2">{averCoffIntake.toFixed(1)}mg</div>
                      <div className="flex-1 text-center pt-2">{tCoffIntake.toFixed(1)}mg</div>
                    </div>
                    <div className="flex flex-row text-xs">
                      <div className="flex-1 py-2  font-semibold pl-1 border-b border-r">Coff before Sleep</div>
                      <div className="flex-1 text-center pt-4">{latestCoffBefBed}H</div>
                      <div className="flex-1 text-center pt-4">{averCoffBefBed.toFixed(1)}H</div>
                      <div className="flex-1 text-center pt-4">{tCoffBefBed.toFixed(1)}H</div>
                    </div>
                    <div className="flex flex-row text-xs">
                      <div className="flex-1 py-2  font-semibold pl-1 border-b border-r">Workout total Time</div>
                      <div className="flex-1 text-center pt-4">{latestWorkoutTime}H</div>
                      <div className="flex-1 text-center pt-4">{averWorkoutTime.toFixed(1)}H</div>
                      <div className="flex-1 text-center pt-4">{tWorkoutTime.toFixed(1)}H</div>
                    </div>
                    <div className="flex flex-row text-xs">
                      <div className="flex-1 py-2  font-semibold pl-1 border-b border-r">Workout before Sleep </div>
                      <div className="flex-1 text-center pt-6">{latestWorkoutBefBed}H</div>
                      <div className="flex-1 text-center pt-6">{averWorkoutBefBed.toFixed(1)}H</div>
                      <div className="flex-1 text-center pt-6">{tWorkoutBefBed.toFixed(1)}H</div>
                    </div>
                    <div className="flex flex-row text-xs">
                      <div className="flex-1 py-2  font-semibold pl-1  border-r">Sleep Time</div>
                      <div className="flex-1 text-center pt-2">{latestSleep}H</div>
                      <div className="flex-1 text-center pt-2">{bestSleep.toFixed(1)}H</div>
                      <div className="flex-1 text-center pt-2">{tBestSleep.toFixed(1)}H</div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
          <div className="pl-36 border-t text-xs text-gray-500">Updated: {currentDate}</div>
        </form>
        <BottomBar />
      </>
  );
}

export default Recommendations;