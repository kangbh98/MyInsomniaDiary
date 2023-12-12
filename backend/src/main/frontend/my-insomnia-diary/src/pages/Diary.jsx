import { Link, useLocation } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import moment from 'moment';
import { useState, useEffect } from 'react';
import axios from 'axios';



const Write = () => {
  const location = useLocation();//url 쿼리 정보 받아오기 위한 훅
  const searchParams = new URLSearchParams(location.search); //search에서 쿼리 파라미터 정보를 받아옴
  const dateParam = searchParams.get('date'); //date값 가져오기
  const formattedDate = dateParam ? moment(dateParam, 'YYYY.MM.DD').format('YYYY-MM-DD') : '?'; //만약 날짜정보 존재하면 그 날짜를 formattedDate에 넣고 표시
  //없으면 그냥 일단 물음표 넣음

  //GET작업 시작
  const [image, setImage] = useState('');
  const [sleepQuality, setSleepQuaility] = useState(0);
  const [coffIntake, setCoffIntake] = useState(0);
  const [coffBefSleep, setCoffBefSleep] = useState(0);
  const [workoutTotal, setWorkoutTotal] = useState(0);
  const [workoutBefSleep, setWorkoutBefSleep] = useState(0);
  const [pillType, setPillType] = useState('');
  const [pillDosage, setPillDosage] = useState(0);
  const [DiaryText, setText] = useState('');
  const [wakeupTime, setwakeuptTime] = useState(0);
  const [bedTime, setbedTime] = useState(0);

  const baseUrl = "http://ec2-15-164-210-112.ap-northeast-2.compute.amazonaws.com:8080";
  useEffect(() => {
    if (formattedDate !== '?') { // '?'는 날짜 정보가 없을 때를 의미합니다.
      fetchDiaryData(); // 날짜 정보가 있을 때 데이터를 가져오는 함수를 호출합니다.
    }
  }, [formattedDate]);

  const fetchDiaryData = () => {
    axios.get(baseUrl+`/diary?date=${formattedDate}`)
    .then((response) => {
      console.log(response.data)
      setImage(response.data.image.url);
      setSleepQuaility(response.data.sleepDiary.sleepTime);
      setCoffIntake(response.data.sleepDiary.caffeineIntake);
      setCoffBefSleep(response.data.sleepDiary.caffeineIntakeTime);
      setWorkoutTotal(response.data.sleepDiary.exercise);
      setWorkoutBefSleep(response.data.sleepDiary.excerciseTime);
      setPillType(response.data.sleepDiary.pill);
      setPillDosage(response.data.sleepDiary.pillDosage);
      setText(response.data.image.prompt);
      setwakeuptTime(response.data.sleepDiary.wakeUpTime);
      setbedTime(response.data.bedTime);
      })
      .catch((error) => {
        console.error('Error fetching diary data:', error);
      });
  };

  
  return (
    <>
      <form className="pb-32">
        <div className="space-y-4">
          <div className=" pb-12 flex flex-col gap-2">
            <h2 className="text-xl text-base font-semibold leading-7 text-gray-900 border-b">
              {formattedDate}
            </h2>

            {/* Image */}
            <div className="border-b">
              <div className="mt-4">
                <img className="rounded-lg" src={image} alt="sub" />
              </div>
            </div>

            {/* Sleep Quality */}
            <div className="border-b">
              <div className="mt-3s">
                <legend className="text-md font-extrabold leading-6 text-gray-900 mb-1">
                  Sleep Time
                </legend>
                  <div className="flex flex-row gap-2 ring-1 ring-gray-200 rounded-lg p-4 w-full text-center">
                    <div className="flex flex-col mt-2">
                      <div className="font-semibold text-l">WakeUp</div>
                      <div className="mt-1 font-semibold">{wakeupTime}:00</div>
                    </div>
                    <div className="flex flex-col ml-2 mt-2">
                      <div className="font-semibold text-l">Bedtime</div>
                      <div className="mt-1 font-semibold">{bedTime}:00</div>
                    </div>
                    <div className="flex flex-col ml-7">
                    <div className="rounded-lg bg-gray-100 p-2">
                      <div className="font-semibold text-xl">Total</div>
                      <div className="font-semibold">{sleepQuality}H</div>
                      </div>
                      </div>
                    </div>
                
              </div>
            </div>

            {/* Your Data */}
            <div className="border-b">
              <div className="mt-4">
                <legend className="text-md font-extrabold leading-6 text-gray-900">
                  Your Data
                </legend>
                <div className="flex flex-row gap-2 py-3">
                  <div className="ring-1 ring-gray-200 rounded-lg  w-full text-center  p-1 flex flex-col"> 
                    <div className="font-semibold mb-1 border-b border-gray-300">Coffee</div>
                    <div className="flex flex-row">
                      <div className="text-xs">{coffBefSleep}H before</div>
                      <img className="mt-0.1 w-4 h-4 rounded-lg ml-1" src="/images/sleep.png"></img>
                      
                  </div>
                    <div className="text-xs">total: {coffIntake}mg</div> 
                  </div>
                  <div className="ring-1 ring-gray-200 rounded-lg w-full text-center  flex flex-col p-1">
                    <div className="font-semibold mb-1 border-b border-gray-300">Workout</div>
                    <div className="flex flex-row">
                      <div className="text-xs">{workoutBefSleep}H before </div>
                      <img className="mt-0.1 w-4 h-4 rounded-lg ml-1" src="/images/sleep.png"></img>
                      
                  </div>
                    <div className="text-xs">total: {workoutTotal}H</div> 
                  </div>
                  <div className="ring-1 ring-gray-200 rounded-lg  w-full text-center  flex flex-col p-1">
                    <div className="font-semibold mb-1 border-b border-gray-300">Pills</div>
                    <div className="flex flex-row">
                      <div className="text-xs">{pillType}</div>
                  </div>
                    <div className="text-xs">{pillDosage !== 0 ? (
                      <>{pillDosage} 정</>
                      ) : (
                      <>None</>
                  )}</div> 
                  </div>
                </div>
              </div>
            </div>

            {/* Diary */}
            <div className="border-b">
              <div className="mt-4">
                <legend className="text-md font-extrabold leading-6 text-gray-900">
                  Diary
                </legend>
                <div className="flex flex-row gap-2 py-3">
                  <textarea
                    className="ring-1 ring-gray-200 rounded-lg p-4 w-full text-xs"
                    rows="10"
                    value={DiaryText}
                    readOnly
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 pb-6 flex items-center justify-end gap-x-6">
          <Link
            to={`/calendarpage`}
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

export default Write;
