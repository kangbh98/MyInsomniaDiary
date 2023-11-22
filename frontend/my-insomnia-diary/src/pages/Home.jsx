import { Link } from 'react-router-dom';

const First = () => {
  return (
    <div className="flex flex-col align-middle text-center h-full">
      <div className="flex flex-col justify-center gap-5 align-middle text-center">
        <div className="border-b">
          <div className="mt-4">
            <div className="flex flex-row gap-2 py-3">
              <div className="ring-1 ring-gray-300 rounded-lg p-4 w-full">
                <div className="font-extrabold text-xl" style={{ float: 'left', marginLeft: '10%', marginTop:'7px' }}>2023.11.07</div>
                <div className="font-extrabold text-3xl" style={{ float: 'right', marginRight: '5%', marginBottom:'5px' }}>
                <Link
                to="/Write"
                className="mx-auto w-140 sm:w-96 rounded bg-gray-500 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                >
                수면일기 작성하기
                </Link>
                </div>
              <div style={{ clear: 'both' }}></div>
            </div>
          </div>
        </div>
        </div>
        <div className="mt-4">
            <div className="ring-1 ring-gray-200 rounded-lg p-4 w-full">
                <div className="ring-1 ring-gray-300 rounded-lg p-4 w-full text-left" style={{marginBottom:"30px"}}>마시는 카페인을 줄일 필요가 있어요.</div>
                <div className="ring-1 ring-gray-300 rounded-lg p-4 w-full text-left" style={{marginBottom:"10px"}}>운동 량을 늘리시면 수면 점수를 개선할 수 있습니다.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
