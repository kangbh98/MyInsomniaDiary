import { Link } from 'react-router-dom';
import {useState} from "react";
import axios from "axios";

const Login = () => {

  const baseUrl = "http://ec2-15-164-210-112.ap-northeast-2.compute.amazonaws.com:8080";
  const onClickLogin = () => {

    console.log("click login");
    console.log("ID : ", email);
    console.log("PW : ", password);

    axios
        .post(`${baseUrl}/login?email=${email}&password=${password}`)
        .then((res) => {
          console.log(res);
          console.log("res.data.userId :: ", res.data.email);
          console.log("res.data.msg :: ", res.data.password);

          if (res.status  === 200) {
            console.log("======================",);
            alert("로그인이 성공했습니다.");

          }

          // 작업 완료 되면 페이지 이동(새로고침)
          document.location.href = "/home";
        })
        .catch((error) => {
          console.error(error); // 에러가 발생한 경우 에러 내용을 출력
          alert("로그인이 실패했습니다."); // 에러가 발생한 경우 알림 추가
        });
  };

  const [email, setInputId] = useState("");
  const [password, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto rounded-full"
            src="/images/main.jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            로그인
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                <span>Email address</span>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleInputId}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleInputPw}
                  autoComplete="current-password"
                  required
                  placeholder="비밀번호를 입력하세요."
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-row gap-3 py-20">
              <Link
                to="/"
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                취소
              </Link>
              <button
                  type="button"
                  onClick={onClickLogin}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
