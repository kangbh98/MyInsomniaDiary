'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Signup() {
  const [userEmail, setUserEmail] = useState('');
  const [isCheckedEmail, setCheckedEmail] = useState(false);
  const [isEmailCheckButtonDisabled, setEmailCheckButtonDisabled] =
    useState(true);
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setUserPasswordCheck] = useState('');

  const handleInputEmailChange = (event) => {
    setUserEmail(event.target.value);

    if (event.target.value.length === 0) {
      setEmailCheckButtonDisabled(true);
    } else {
      setEmailCheckButtonDisabled(false);
    }
  };

  const clickEmailCheck = () => {
    if (userEmail.indexOf('@') === -1) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }

    if (userEmail === 'test@gmail.com') {
      alert('중복된 이메일입니다.');
      return;
    } else {
      setCheckedEmail(true);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            회원가입
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2 flex flex-row gap-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={userEmail}
                  onChange={handleInputEmailChange}
                  autoComplete="email"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs sm:leading-6"
                  disabled={isCheckedEmail}
                />
                {!isCheckedEmail ? (
                  <button
                    onClick={clickEmailCheck}
                    className={`flex w-24 justify-center rounded-md bg-indigo-500 px-3 py-1 text-xs font-normal leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 
                  ${isEmailCheckButtonDisabled ? 'opacity-20' : ''}`}
                    disabled={isEmailCheckButtonDisabled}
                  >
                    중복확인
                  </button>
                ) : (
                  <span className="text-xs w-20 justify-center align-middle m-auto">
                    확인완료
                  </span>
                )}
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
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  placeholder="비밀번호"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  id="passwordCheck"
                  name="passwordCheck"
                  type="password"
                  value={userPasswordCheck}
                  onChange={(e) => setUserPasswordCheck(e.target.value)}
                  required
                  placeholder="비밀번호 확인"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs sm:leading-6"
                />
                {userPassword !== userPasswordCheck ? (
                  <span className="text-xs text-red-500">
                    비밀번호가 일치하지 않습니다.
                  </span>
                ) : null}
              </div>
            </div>

            <div className="flex flex-row gap-3 px-20">
              <Link
                href={`/`}
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                취소
              </Link>
              <Link
                href={`/signup/`}
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                  ${
                    isCheckedEmail &&
                    userPassword === userPasswordCheck &&
                    userPassword.length > 0
                      ? ''
                      : 'opacity-20'
                  }`}
              >
                다음
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
