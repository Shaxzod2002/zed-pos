import React from 'react';

export default function Main() {
  return (
    <div className="min-h-screen w-full bg-[#DCDCDC] md:w-[calc(100%-250px)]">
      <div className="flex min-h-[400px] w-full flex-col justify-center bg-white">
        <div className="flex min-h-[70px] w-full flex-col items-center gap-3 px-4 py-2 md:flex-row md:py-0">
          <button className="rounded-md bg-[#FCA311] py-1 px-3 text-white">
            Yangi mijoz qo'shish
          </button>
          <div className="flex items-center gap-2">
            <label htmlFor="search-name">Qidirish</label>
            <input
              className="border border-black pl-2 outline-none"
              type="search"
              id="search-name"
            />
          </div>
        </div>
        <div className="flex min-h-[300px] w-full flex-col justify-evenly md:flex-row">
          <div className="h-[300px] w-full overflow-auto bg-[#F5F5F5] md:w-[48%]">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-[#FFFAFA]">
                  <th className="border">Mijoz ismi</th>
                  <th className="border">Tel.</th>
                  <th className="border">Umumiy qarz</th>
                  <th className="border">Qo'shimcha</th>
                  <th className="border">Boshqarish</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="h-[40px] border">Qosimjon</td>
                  <td className="h-[40px] border">
                    <a href="tel:+998917411543">+998917411543</a>
                  </td>
                  <td className="h-[40px] border">120 200 so'm</td>
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
          <div className="h-[300px] w-full overflow-auto bg-[#F5F5F5] md:w-[48%]">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-[#FFFAFA]">
                  <th className="border">Mijoz ismi</th>
                  <th className="border">Buyurtma</th>
                  <th className="border">To'lov summa</th>
                  <th className="border">To'lov vaqti</th>
                  <th className="border">Qo'shimcha</th>
                  <th className="border">Boshqarish</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="h-[40px] border">Qosimjon</td>
                  <td className="h-[40px] border">
                    <a href="tel:+998917411543">10</a>
                  </td>
                  <td className="h-[40px] border">100 200 so'm</td>
                  <td className="h-[40px] border">2023/02/15 14:00</td>
                  <td></td>
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
        <div className="min-h-[255px] w-full bg-[#FFFFE1]">
          <div className="mx-auto flex min-h-[50px] w-[95%] items-center gap-2">
            <label htmlFor="buyurtma"># Buyurtma</label>
            <input
              type="search"
              id="buyurtma"
              className="border border-black pl-2"
            />
          </div>
          <div className="mx-auto h-[200px] w-[95%] max-w-[1500px] overflow-auto bg-[#F5F5F5]">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-[#FFFAFA]">
                  <th className="border">Mijoz ismi</th>
                  <th className="border"># Buyurtma</th>
                  <th className="border">Savdo summasi</th>
                  <th className="border">Chegirma</th>
                  <th className="border">Sotilgan summa</th>
                  <th className="border">To'langan summa</th>
                  <th className="border">To'langan qarz</th>
                  <th className="border">Savdo vaqti</th>
                  <th className="border">To'lov qo'shish</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="h-[40px] border">Qosimjon</td>
                  <td className="h-[40px] border"># 20</td>
                  <td className="h-[40px] border">200 000 so'm</td>
                  <td className="h-[40px] border">400 000 so'm</td>
                  <td className="h-[40px] border">100 000 so'm</td>
                  <td className="h-[40px] border">120344 so'm</td>
                  <td className="h-[40px] border">12950 so'm</td>
                  <td className="h-[40px] border">2023/02/15 14:00</td>
                  <td className="h-[40px] border">
                    <button className="rounded-lg bg-blue-500 py-1 px-2 text-white">
                      To'lov qo'shish
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
