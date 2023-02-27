import React from 'react';
import Confirm from '../../images/confirm.png';
export default function Main() {
  const date = new Date();
  return (
    <div className="min-h-screen w-full bg-[#fff] md:w-[calc(100%-250px)]">
      <div className="mx-auto flex min-h-[70px] w-[90%] items-center gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="expenes-type">Xarajat turi:</label>
          <input
            type="search"
            id="expenes-type"
            className="border border-black bg-white  py-1 px-3 outline-none"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="date"
            defaultValue={`${date.getFullYear()}-0${date.getMonth() + 1}-${
              date.getDate() - 10
            }`}
            className="border border-black bg-white  py-1 px-3 outline-none"
          />
          <input
            type="date"
            defaultValue={`${date.getFullYear()}-0${
              date.getMonth() + 1
            }-${date.getDate()}`}
            className="border border-black bg-white  py-1 px-3 outline-none"
          />
          <button className="bg-[#FCA311] py-1 px-3">
            <img src={Confirm} className="w-[18px]" alt="confirm" />
          </button>
        </div>
        <button className="bg-[#FCA311] py-[6px] px-3 text-white">
          Xarajat qo'shish
        </button>
      </div>
      <div className="min-h-[calc(100vh-70px)] w-full">
        <div className="mx-auto min-h-[calc(100vh-80px)]  w-[95%] bg-[#F5F5F5]">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-[#FFFAFA]">
                <th className="border">ID</th>
                <th className="border">Xarajat turi</th>
                <th className="border">Xarajat summasi</th>
                <th className="border">Xarajat vaqti</th>
                <th className="border">Qo'shimcha</th>
                <th className="border">Boshqarish</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="h-[40px] border">1</td>
                <td className="h-[40px] border">Obed</td>
                <td className="h-[40px] border">25 000 so'm</td>
                <td className="h-[40px] border">03/15/2023 15:40</td>
                <td className="h-[40px] border"></td>
                <td className="h-[40px] border">
                  <button className="rounded-lg bg-red-500 py-1 px-2 text-white">
                    O'chirish
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
