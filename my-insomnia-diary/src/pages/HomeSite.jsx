import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';

const HomeSite = () => {
    <>
        <div className="flex flex-col gap-2 mt-3 text-center">
            <Link
                to={`/write`}
                className="mx-auto  rounded-md bg-indigo-500 px-2.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-center"
            >
                수면일기 작성하기
            </Link>
            <div className=" pb-12 flex flex-col gap-2">
            <h2 className="text-base font-semibold leading-7 text-gray-900 border-b">
              2023.11.07
            </h2>
            </div>
        </div>  
        <BottomBar />
    </>
}
export default HomeSite;
