import React from 'react';
import Filter from './Filter';
import GeneralInformation from './GeneralInformation';
import { FiDownload } from 'react-icons/fi';
import { FaUserSecret, FaUserClock, FaMoneyBillWave } from 'react-icons/fa';
export default function Main() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-4 bg-[#181C3F] md:w-[calc(100%-250px)]">
      <Filter />
      <GeneralInformation />
      <div className="mx-auto flex w-[90%] justify-between gap-4">
        <div className="min-h-[240px] w-[70%] bg-[#2A2D56] py-2 px-4">
          <h1 className="text-2xl text-[#F0F0F0]">Umumiy Daromad</h1>
        </div>
        <div className="min-h-[240px] w-[28%] bg-[#2A2D56] px-4 py-2">
          <h1 className="text-lg text-[#F0F0F0]">
            Top 5 ko'p sotilgan tovarlar
          </h1>
        </div>
      </div>
      <div className="mx-auto flex w-[90%] flex-wrap justify-between">
        <div className="min-h-[130px] w-[29%] flex-col justify-center gap-4 bg-[#2A2D56] py-2 px-4 text-[#F0F0F0] ">
          <h2 className="text-xl">Umumiy sonlar</h2>
          <div className="flex items-center gap-4">
            <div className="text-3xl text-[#f6a013]">
              <FiDownload />
            </div>
            <div>
              <h3 className="text-lg">Tovarlar soni</h3>
              <p>158</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-3xl text-[#f6a013]">
              <FaUserSecret />
            </div>
            <div>
              <h3 className="text-lg">Mijozlar</h3>
              <p>34</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-3xl text-[#f6a013]">
              <FaUserClock />
            </div>
            <div>
              <h3 className="text-lg">Qarzdorlar</h3>
              <p>123</p>
            </div>
          </div>
        </div>
        <div className="min-h-[130px] w-[39%]  flex-col justify-center gap-4 bg-[#2A2D56] py-2 px-4 text-[#F0F0F0]">
          <h2 className="text-xl">Qolgan tovarlar qoldig'i</h2>
          <div className="h-[150px] w-[90%] overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Tovar</th>
                  <th>Qoldiq</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="h-[40px] border-b">
                  <td>tovar test 19 k.v</td>
                  <td>12</td>
                </tr>
                <tr className="h-[40px] border-b">
                  <td>tovar test 19 k.v</td>
                  <td>12</td>
                </tr>
                <tr className="h-[40px] border-b">
                  <td>tovar test 19 k.v</td>
                  <td>12</td>
                </tr>
                <tr className="h-[40px] border-b">
                  <td>tovar test 19 k.v</td>
                  <td>12</td>
                </tr>
                <tr className="h-[40px] border-b">
                  <td>tovar test 19 k.v</td>
                  <td>12</td>
                </tr>
                <tr className="h-[40px] border-b">
                  <td>tovar test 19 k.v</td>
                  <td>12</td>
                </tr>
                <tr className="h-[40px] border-b">
                  <td>tovar test 19 k.v</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex min-h-[130px] w-[28%] flex-col justify-center gap-4 bg-[#2A2D56] py-2 px-4 text-[#F0F0F0]">
          <h2 className="text-xl">Umumiy summa</h2>
          <div>
            <div className="flex items-center gap-4">
              <div className="text-3xl text-[#f6a013]">
                <FaMoneyBillWave />
              </div>
              <div>
                <h3 className="text-lg">Tashqi haqlar</h3>
                <p className="text-lg">0 so'm</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-3xl text-[#f6a013]">
                <FaMoneyBillWave />
              </div>
              <div>
                <h3 className="text-lg">Do'kondagi tovarlar</h3>
                <p className="text-lg">707,453,356 so'm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
