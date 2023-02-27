import React from 'react';
import Menu from './menu';

export default function MenuBar() {
  return (
    <div className="min-h-[625px] w-full bg-[#14213D] md:w-[250px]">
      <div className="mx-auto mt-5 flex min-h-[80px] w-[90%] items-center justify-center border border-[#CCE4F7] text-[#D3D3D3]">
        <h1 className={'text-xl uppercase md:text-3xl lg:text-4xl'}>Zed pos</h1>
      </div>
      <Menu />
    </div>
  );
}
