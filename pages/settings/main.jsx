import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
export default function Main() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FFFAFA] md:w-[calc(100%-250px)]">
      <div className="mx-auto flex w-[90%]">
        <div className="flex w-full justify-center py-2 md:w-1/2 lg:w-1/3">
          <button className="rounded-lg bg-blue-500 p-2 text-2xl text-white">
            <AiOutlinePlus />
          </button>
        </div>
        <div className="flex w-full justify-center py-2 md:w-1/2 lg:w-1/3">
          <button className="rounded-lg bg-blue-500 p-2 text-2xl text-white">
            <AiOutlinePlus />
          </button>
        </div>
        <div className="flex w-full justify-center py-2 md:w-1/2 lg:w-1/3">
          <button className="rounded-lg bg-blue-500 p-2 text-2xl text-white">
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <div className="mx-auto flex w-[90%]">
        <div className="h-[400px] w-full overflow-auto border border-black bg-white md:w-1/2 lg:w-1/3">
          <h3 className="bg-black py-1 text-center text-2xl font-bold text-white">
            O'lchamlar
          </h3>
          <ul className="h-[350px] w-full overflow-auto">
            <li className="flex justify-around border-b border-black py-2 text-xl first:border-t">
              <span>Kg</span>
              <button className="rounded-lg bg-red-500 py-1 px-2 text-white">
                O'chirish
              </button>
            </li>
          </ul>
        </div>
        <div className="h-[400px] w-full overflow-auto border border-black bg-white md:w-1/2 lg:w-1/3">
          <h3 className="bg-black py-1 text-center text-2xl font-bold text-white">
            Xarajatlar
          </h3>
          <ul className="h-[350px] w-full overflow-auto">
            <li className="flex justify-around border-b border-black py-2 text-xl first:border-t">
              <span>Obet</span>
              <button className="rounded-lg bg-red-500 py-1 px-2 text-white">
                O'chirish
              </button>
            </li>
          </ul>
        </div>
        <div className="h-[400px] w-full overflow-auto border border-black bg-white md:w-1/2 lg:w-1/3">
          <h3 className="bg-black py-1 text-center text-2xl font-bold text-white">
            Firmalar
          </h3>
          <ul className="h-[350px] w-full overflow-auto">
            <li className="flex justify-around border-b border-black py-2 text-xl first:border-t">
              <span>Mark</span>
              <button className="rounded-lg bg-red-500 py-1 px-2 text-white">
                O'chirish
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
