import { Link } from 'react-router-dom';

const Alarm = () => {
  return (
    <>
    <div className="flex flex-col align-middle text-center h-full ">
      <div className="flex flex-col justify-center gap-4 align-middle text-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Link to={`/home`}>
      <img className="w-8 rounded-lg cursor-pointer" src="/images/bef.png" alt="sub" style={{float:'left'}}/>
      </Link>
      </div>

        
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-2 text-left text-xl font-semibold leading-6 tracking-tight text-gray-900 text-center">
            Notifications
          </h1>
        </div>
        <div className="ring-1 ring-gray-300 rounded-lg p-3 w-full pb-60">
          <div className="bg-gray-100 ring-1 ring-gray-400 rounded-lg p-2 w-full h-14 text-left text-xs font-semibold mb-3 ">브리즈 데이터를 동기화하였습니다.
            <div className="font-normal text-right mt-2">
            3분 전
            </div>
          </div>
          <div className="bg-gray-100 ring-1 ring-gray-400 rounded-lg mb-3 p-2 w-full h-17 text-left text-xs font-semibold ">11.07 다이어리 이미지 생성이 완료되었습니다.
          <div className="font-normal text-right">
            2시간 전
            </div></div>
          <div className="bg-gray-100 ring-1 ring-gray-400 rounded-lg p-2 mb-3 w-full h-14 text-left text-xs font-semibold ">작성 중인 수면일기가 저징되었습니다.<div className="font-normal text-right mt-2">
            1일 전
            </div></div>
            <div className="ring-1 ring-gray-400 rounded-lg mb-3 p-2 w-full h-17 text-left text-xs font-semibold ">11.04 다이어리 이미지 생성이 완료되었습니다.
          <div className="font-normal text-right">
            4일 전
            </div></div>
            <div className="ring-1 ring-gray-400 rounded-lg mb-3 p-2 w-full h-17 text-left text-xs font-semibold ">브리즈 데이터를 동기화하였습니다.
          <div className="font-normal text-right mt-2">
            일주일 전
            </div></div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Alarm;
