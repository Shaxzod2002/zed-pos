import React from 'react'

export default function Filter() {
  return (
    <div className="mx-auto flex pt-4 w-[90%] flex-wrap items-center justify-between gap-4 filter">
      <div className="dates flex gap-4">
        <input
          type="date"
          className="cursor-pointer rounded-md bg-[#F0F0F0] px-3 py-2"
        />
        <input
          type="date"
          className="cursor-pointer rounded-md bg-[#F0F0F0] px-3 py-2"
        />
      </div>
      <div className="times flex flex-wrap items-center">
        <div className="cursor-pointer border border-[#6B53FF] py-2 px-6 text-[#7C8D91]">
          <p>Sana</p>
        </div>
        <div className="cursor-pointer border border-[#6B53FF] py-2 px-6 text-[#7C8D91]">
          <p>Bugun</p>
        </div>
        <div className="cursor-pointer border border-[#6B53FF] py-2 px-6 text-[#7C8D91]">
          <p>7 kun</p>
        </div>
        <div className="cursor-pointer border border-[#6B53FF] py-2 px-6 text-[#7C8D91]">
          30 kun
        </div>
        <div className="cursor-pointer border border-[#6B53FF] py-2 px-6 text-[#7C8D91]">
          Shu Oy
        </div>
      </div>
    </div>
  );
}
