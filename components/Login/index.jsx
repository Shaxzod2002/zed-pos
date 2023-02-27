import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { HiXMark } from 'react-icons/hi2';
export default function Login() {
  const [passwordCheck, setPasswordCheck] = useState(true);
  const [passwordBeforeCheck, setPasswordBeforeCheck] = useState(true);
  const [passwordAfterCheck, setPasswordAfterCheck] = useState(true);
  const [updatePasswordBox, setUpdatePasswordBox] = useState(false);
  const [userCheck, setUserCheck] = useState(false);
  const [password, setPassword] = useState('test');
  const passRef = useRef(null);
  const handlePasswordAye = () => {
    !passwordCheck ? setPasswordCheck(true) : setPasswordCheck(false);
  };
  const handleBeforePasswordAye = () => {
    !passwordBeforeCheck
      ? setPasswordBeforeCheck(true)
      : setPasswordBeforeCheck(false);
  };
  const handleAfterPasswordAye = () => {
    !passwordAfterCheck
      ? setPasswordAfterCheck(true)
      : setPasswordAfterCheck(false);
  };
  const handleUserCheck = (event) => {
    if (password !== 'web123') {
      event.preventDefault();
      passRef.current.style.border = '1px solid red';
      setUserCheck(true);
    }
  };

  return (
    <div className="flex min-h-[625px] w-full items-center justify-center bg-[#DCDCDC]">
      <div className="relative flex min-h-[500px] w-[400px] max-w-[90%] flex-col items-center justify-center gap-5 rounded-xl shadow-lg shadow-gray-400">
        <h1 className="absolute top-10 text-3xl font-semibold text-[#f6a013]">
          Zed Pos Login
        </h1>
        <div
          ref={passRef}
          className="flex w-[90%] items-center justify-around rounded-lg bg-white p-2"
        >
          <input
            type={passwordCheck ? 'password' : 'text'}
            onChange={(e) => {
              setPassword(e.target.value);
              setUserCheck(false);
              passRef.current.style.border = 'none';
            }}
            className="w-[90%] bg-transparent outline-none"
            placeholder="Shaxsiy parolingizni kiriting"
          />
          <span className="cursor-pointer text-3xl" onClick={handlePasswordAye}>
            {passwordCheck ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>
        {userCheck && (
          <p className="text-red-500">Parolni to'g'ri kiriting!!!</p>
        )}
        {!password && <p className="text-red-500">Parol Kiritmadingiz!!!</p>}
        <Link
          href={'/home'}
          onClick={(e) => handleUserCheck(e)}
          className="w-[90%] cursor-pointer rounded-xl bg-blue-500 py-2 px-4 text-center text-white"
        >
          Kirish
        </Link>
        <button
          type="button"
          className="text-blue-500"
          onClick={() => setUpdatePasswordBox(true)}
        >
          Parolni o'zgartirish
        </button>
      </div>
      {updatePasswordBox && (
        <div className="fixed flex min-h-[500px] w-[400px] flex-col items-center justify-center gap-5 rounded-xl bg-white shadow-lg shadow-gray-400">
          <button
            type="button"
            onClick={() => setUpdatePasswordBox(false)}
            className="absolute top-4 right-4 z-30 flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-[#f6a013] text-center text-2xl text-white
        "
          >
            <HiXMark />
          </button>
          <h1 className="text-3xl font-semibold text-[#f6a013]">
            Yangi parol o'rnatish
          </h1>
          <div className="flex w-[90%] items-center justify-around rounded-lg border bg-white p-2">
            <input
              type={passwordBeforeCheck ? 'password' : 'text'}
              className="w-[90%] bg-transparent outline-none"
              placeholder="Eski parolingizni kiriting"
            />
            <span
              className="cursor-pointer text-3xl"
              onClick={handleBeforePasswordAye}
            >
              {passwordBeforeCheck ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          <div className="flex w-[90%] items-center justify-around rounded-lg border bg-white p-2">
            <input
              type={passwordAfterCheck ? 'password' : 'text'}
              className="w-[90%] bg-transparent outline-none"
              placeholder="Yangi parolingizni kiriting"
            />
            <span
              className="cursor-pointer text-3xl"
              onClick={handleAfterPasswordAye}
            >
              {passwordAfterCheck ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          <Link
            href={'/'}
            className="cursor-pointer rounded-xl bg-blue-500 py-2 px-4 text-center text-white"
          >
            Saqlash
          </Link>
        </div>
      )}
    </div>
  );
}
