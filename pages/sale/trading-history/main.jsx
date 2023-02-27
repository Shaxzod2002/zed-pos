import React from 'react';
import Menu from '../menu';
import Confirm from '../../../images/confirm.png';
import Googs from './goods';
import PaidGoods from './paid-goods';
export default function Main() {
  return (
    <div className="min-h-screen w-full bg-[#DCDCDC] md:w-[calc(100%-250px)]">
      <Menu />
      <div className="flex min-h-[80px] items-center bg-white">
        <div className="flex w-full justify-center gap-2 md:w-1/2">
          <label htmlFor="1">Buyurtma</label>
          <input
            id="1"
            type="number"
            className="border border-black pl-2 outline-none"
          />
        </div>
        <div className="flex w-full justify-center gap-2 md:w-1/2">
          <input type="date" className="border border-black p-2 outline-none" />
          <input type="date" className="border border-black p-2 outline-none" />
          <button className="rounded-lg bg-orange-300 p-2 hover:bg-orange-500">
            <img src={Confirm} className="w-6" alt="confirm" />
          </button>
        </div>
      </div>
      <div className="flex min-h-[calc(100vh-150px)] items-center justify-evenly">
        <Googs />
        <PaidGoods />
      </div>
    </div>
  );
}
