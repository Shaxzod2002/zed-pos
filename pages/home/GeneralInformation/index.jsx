import React from 'react';
import { information } from './data';
export default function GeneralInformation() {
  
  return (
    <div className="mx-auto flex w-[90%] flex-wrap items-center justify-between gap-4">
      {information.map((item) => {
        return (
          <div
            className="flex w-[210px] items-center justify-start gap-3 bg-[#2A2D56] py-2 pl-4 text-white"
            key={item.id}
          >
            <div className="rounded-lg px-4 py-2 text-3xl text-[#f6a013] shadow-lg  shadow-gray-500">
              {item.icon}
            </div>
            <div>
              <h1 className="text-xl font-normal">{item.title}</h1>
              <p className="text-lg font-normal">{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
