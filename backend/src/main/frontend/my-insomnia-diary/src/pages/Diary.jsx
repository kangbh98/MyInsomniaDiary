import { Link, useLocation } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import moment from 'moment';
import { useState, useEffect } from 'react';
import axios from 'axios';



function Write() {
  const location = useLocation();//url 쿼리 정보 받아오기 위한 훅
  const searchParams = new URLSearchParams(location.search); //search에서 쿼리 파라미터 정보를 받아옴
  const dateParam = searchParams.get('date'); //date값 가져오기
  const formattedDate = dateParam ? moment(dateParam).format('YYYY.MM.DD') : '?'; //만약 날짜정보 존재하면 그 날짜를 formattedDate에 넣고 표시
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

  const baseUrl = "http://localhost:8080";
  useEffect(() => {
    if (formattedDate !== '?') { // '?'는 날짜 정보가 없을 때를 의미합니다.
      fetchDiaryData(); // 날짜 정보가 있을 때 데이터를 가져오는 함수를 호출합니다.
    }
  }, [formattedDate]);

  const fetchDiaryData = () => {
    axios.get(baseUrl+`YOUR_API_ENDPOINT/${formattedDate}`)
    .then((response) => {
      console.log(response.data)
      setImage(response.data.image);
      setSleepQuaility(response.data.sleepQuality);
      setCoffIntake(response.coffIntake);
      setCoffBefSleep(response.coffBefSleep);
      setWorkoutTotal(response.workoutTotal);
      setWorkoutBefSleep(response.workoutBefSleep);
      setPillType(response.pillType);
      setPillDosage(response.pillDosage);
      setText(response.data.diary);
      })
      .catch((error) => {
        console.error('Error fetching diary data:', error);
      });
  };
/*이런형태로 가정하고 작성
const diaryData = {
  image: '/images/sub.jpg', //문자열
  sleepQuality: 96, //숫자
  coffIntake(mg)//숫자
  coffBefSleep(h)//숫자
  workoutTotal
  workoutBefSleep
  pillType
  pillDosage
  diary: "content"
};
*/
  
  return (
    <>
      <form className="pb-32">
        <div className="space-y-4">
          <div className=" pb-12 flex flex-col gap-2">
            <h2 className="text-base font-semibold leading-7 text-gray-900 border-b">
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
              <div className="mt-4">
                <legend className="text-md font-extrabold leading-6 text-gray-900">
                  Sleep Quality
                </legend>
                <div className="flex flex-row gap-2 py-3">
                  <div className="ring-1 ring-gray-200 rounded-lg p-4 w-full space-x-2">
                    <span className="font-medium text-xl">SCORE</span>
                    <span className="font-extrabold text-3xl">{sleepQuality}</span>
                  </div>
                  <div className="ring-1 ring-gray-200 rounded-lg p-4 w-full text-center">
                    <span className="text-sm">차트</span>
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
                <div className="ring-1 ring-gray-200 rounded-lg p-4 w-full text-center">
                    <span className="text-xs">{coffIntake}</span>
                  </div>
                  <div className="ring-1 ring-gray-200 rounded-lg p-4 w-full text-center">
                    <span className="text-xs">{workoutTotal}</span>
                  </div>
                  <div className="ring-1 ring-gray-200 rounded-lg p-4 w-full text-center">
                    <span className="text-xs">{pillType}</span>
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

export default Write;
