import React from 'react';

export default function Main() {
  return (
    <div className="min-h-[calc(100vh-70px)] w-full bg-[#FFFFE1]">
      <div className="mx-auto flex min-h-[70px] w-[90%] items-center justify-between">
        <div className="flex gap-2">
          <label htmlFor="name">Tovar Kodi</label>
          <input
            type="search"
            id="name"
            className="border border-black pl-2 outline-none"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="code">Tovar Nomi</label>
          <input
            type="search"
            id="code"
            className="border border-black pl-2 outline-none"
          />
        </div>
      </div>
      <div className="flex min-h-[calc(100vh-140px)] w-full items-center justify-center">
        <div className="h-[calc(100vh-150px)] w-[90%] max-w-[1200px] overflow-auto bg-white">
          <table className="w-full">
            <thead>
              <tr className="bg-[#FFFAFA]">
                <th className="border">Tovar kodi</th>
                <th className="border">Tovar nomi</th>
                <th className="border">Kelgan narxlar</th>
                <th className="border">Sotiladigan narxlar</th>
                <th className="border">Qoldiq</th>
                <th className="border">Qo'shimcha ma'lumot</th>
                <th className="border">Boshqarish</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="h-[40px] border">Test</td>
                <td className="h-[40px] border">Test</td>
                <td className="h-[40px] border">Test</td>
                <td className="h-[40px] border">Test</td>
                <td className="h-[40px] border">Test</td>
                <td className="h-[40px] border">Test</td>
                <td className="flex h-[40px] items-center justify-between border px-2">
                  <button className="rounded-lg bg-[#14213D] py-1 px-2 text-[#FCA311]">
                    Arxivdan chiqarish
                  </button>
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
