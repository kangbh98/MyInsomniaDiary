import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { useState, useEffect } from 'react';

const WriteDiary = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dateParam = searchParams.get('date');
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (dateParam) {
      const formatted = moment(dateParam, 'YYYY.MM.DD').format('YYYY-MM-DD');
      setFormattedDate(formatted);
    }
  }, [dateParam]);

  const baseUrl = "http://ec2-15-164-210-112.ap-northeast-2.compute.amazonaws.com:8080";
  const onClickSubmit = (event) => {
    event.preventDefault();
    console.log("click submit");
    console.log("Diary : ", diary);


    axios
        .post(`${baseUrl}/generate/image?date=${formattedDate}&diary=${diary}`)
        .then(() => {

          // 작업 완료 되면 페이지 이동(새로고침)
          document.location.href = "/home";
        })
        .catch((error) => {
          console.error(error); // 에러가 발생한 경우 에러 내용을 출력
          alert("일기 전송 실패."); // 에러가 발생한 경우 알림 추가
        });
  }
  const handleInputDiary = (e) => {
    setInputDiary(e.target.value);
  };
  const [diary, setInputDiary] = useState("");

  return (
      <>
        <form className="pb-32" onSubmit={onClickSubmit}>
          <div className="space-y-4">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                {formattedDate}
              </h2>
              <p className="mt-1 text-lg font-semibold leading-6 text-gray-600 border-b pb-2">
                Write your diary
              </p>

              {/* Diary */}
              <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="">
                  <label
                      htmlFor="diary"
                      className="block text-md font-extrabold leading-6 text-gray-900"
                  >
                    Diary
                  </label>

                  <div className="mt-2">
                      <textarea
                          id="about"
                          name="about"
                          rows={5}
                          value={diary}
                          placeholder="Click and write"
                          className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm text-sm sm:leading-6"
                          onChange={handleInputDiary}
                      />
                  </div>
                  <p className="p-2 text-xs leading-6 text-gray-600">
                    * The more you share, the better image gets!
                  </p>
                </div>

              </div>

            </div>
          </div>

          <div className="mt-6 pb-6 flex items-center justify-end gap-x-6">
            <Link
                to={`/Write`}
                className="text-sm font-semibold leading-6 text-gray-900"
            >
              Previous
            </Link>


            <button className='py-3 px-6 ring-1
          rounded-lg bg-indigo-500 ring-indigo-200 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 text-center flex items-center justify-center font-semibold text-sm font-semibold leading-6 text-gray-900 btn btn-primary '>Complete</button>
          </div>

          <div className="items-center text-center mt-8 rounded-lg border p-4">
            <h2 className="text-lg font-semibold leading-6 text-gray-900">
              Sleep Image Example
            </h2>

            <img
                className="ml-4 mt-2 rounded-md border border-gray-300"
                style={{ maxWidth: '90%' }}
                src="/images/exampleimage.jpg"
                alt="Example Sleep Image"

            />
          </div>
        </form>
      </>
  );
}

export default WriteDiary;