import React from 'react';
import { data } from './data';

export default function NewGoodsOrder() {
  const date = new Date();
  return (
    <div className="w-full p-2 md:w-1/2">
      <div className="mx-auto flex w-[90%] flex-wrap items-center justify-between gap-2">
        <button className="bg-green-500 py-2 px-4 text-white">
          Yangi Buyurtma
        </button>
        <input
          className="w-24 border border-black py-2 pl-3"
          type="number"
          placeholder="Kodi"
        />
        <input
          className="w-24 border border-black py-2 pl-3"
          type="text"
          placeholder="Hajmi"
        />
        <input
          className="w-24 border border-black py-2 pl-3"
          type="text"
          placeholder="Narxi"
        />
      </div>
      <div className="mx-auto mt-4 h-[300px] w-[90%] max-w-[600px] overflow-auto border bg-white">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border">Kodi</th>
              <th className="border">Nomi</th>
              <th className="border">Narxi</th>
              <th className="border">Hajmi</th>
              <th className="border">Summa</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="h-[50px] border">{item.code}</td>
                  <td className="h-[50px] border">{item.name}</td>
                  <td className="h-[50px] border">{item.cost}</td>
                  <td className="h-[50px] border">{item.volume}</td>
                  <td className="h-[50px] border">{item.summa}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mx-auto w-[90%] py-2">
        <h1>
          Umumiy Summa <span>0 so'm</span>
        </h1>
      </div>
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <h3>
          Sana vaqt: {date.getDay()}/{date.getMonth()}/{date.getFullYear()}{' '}
          {date.getHours()} : {date.getMinutes()}
        </h3>
        <div className="flex items-center gap-2">
          <h2>Xaridor</h2>
          <select className="border border-black bg-white">
            <option value="1">Karimjon</option>
            <option value="2">Olimjon</option>
            <option value="3">Nosirjon</option>
          </select>
        </div>
      </div>
      <div className="mx-auto my-2 flex w-[90%] items-center gap-2">
        <h3>Qo'shimcha</h3>
        <textarea className="h-[30px] w-[200px] border border-black bg-white px-2 outline-none"></textarea>
      </div>
      <div className="mx-auto flex w-[90%] justify-between">
        <button className="rounded-lg bg-red-500 py-2 px-4 text-white">
          Bekor Qilish
        </button>
        <button className="rounded-lg bg-green-500 py-2 px-4 text-white">
          To'lov Qilish
        </button>
      </div>
    </div>
  );
}
