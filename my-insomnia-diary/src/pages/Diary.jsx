import { Link } from 'react-router-dom';

const diaryText = `내일 아침에 컴퓨터 네트워크 시험이 있다. 그런데 하루 간 커피를 두잔 먹었던 탓일까 밤에 잠들기 전 1시간 동안 뒤척였다. 시험 본다는 생각을 하니 괜히 긴장되어서 그런가 잠이 안와서 유투브를 보다가 잠들었다. 꿈을 꿨는데 꿈 내용은 이빨이 빠지는 꿈이었다. 아침에 일어나서 피곤하긴 했는데 이빨 빠지는 꿈은 좋은일이 일어날거라는데 계시이므로 기분이 좋았다.`;

function Write() {
  return (
    <form>
      <div className="space-y-4">
        <div className=" pb-12 flex flex-col gap-2">
          <h2 className="text-base font-semibold leading-7 text-gray-900 border-b">
            2023.11.07
          </h2>

          {/* Image */}
          <div className="border-b">
            <div className="mt-4">
              <img className="rounded-lg" src="/images/sub.jpg" alt="sub" />
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
                  <span className="font-extrabold text-3xl">96</span>
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
                  <span className="text-xs">None</span>
                </div>
                <div className="ring-1 ring-gray-200 rounded-lg p-4 w-full text-center">
                  <span className="text-xs">None</span>
                </div>
                <div className="ring-1 ring-gray-200 rounded-lg p-4 w-full text-center">
                  <span className="text-xs">None</span>
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
                  value={diaryText}
                  readOnly
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Write;
