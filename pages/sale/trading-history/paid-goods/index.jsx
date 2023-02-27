import React from 'react';

export default function PaidGoods() {
  let i = 0;
  const data = [
    {
      id: i++,
      order: 20,
      productCode: 1001,
      productName: 'Silver 1002',
      cost: "30,500 so'm",
      size: '1kv.meter',
      amount: "30,500 so'm",
      takeItBack: (
        <button className="rounded-lg bg-red-500 px-2 text-white">
          Tovarni qaytarish
        </button>
      ),
    },
    {
      id: i++,
      order: 20,
      productCode: 1001,
      productName: 'Silver 1002',
      cost: "30,500 so'm",
      size: '1kv.meter',
      amount: "30,500 so'm",
      takeItBack: (
        <button className="rounded-lg bg-red-500 px-2 text-white">
          Tovarni qaytarish
        </button>
      ),
    },
    {
      id: i++,
      order: 20,
      productCode: 1001,
      productName: 'Silver 1002',
      cost: "30,500 so'm",
      size: '1kv.meter',
      amount: "30,500 so'm",
      takeItBack: (
        <button className="rounded-lg bg-red-500 px-2 text-white">
          Tovarni qaytarish
        </button>
      ),
    },
  ];

  return (
    <div className="h-[calc(100vh-180px)] w-full overflow-auto bg-white md:w-[48%]">
      <table>
        <thead>
          <tr>
            <th className="border p-2">Buyurtma</th>
            <th className="border p-2">Tovar kodi</th>
            <th className="border p-2">Tovar nomi</th>
            <th className="border p-2">Narxi</th>
            <th className="border p-2">Hajmi</th>
            <th className="border p-2">Summa</th>
            <th className="border p-2">Qaytarib olish</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td className="border p-2">{item.order}</td>
                <td className="border p-2">{item.productCode}</td>
                <td className="border p-2">{item.productName}</td>
                <td className="border p-2">{item.cost}</td>
                <td className="border p-2">{item.size}</td>
                <td className="border p-2">{item.amount}</td>
                <td className="border p-2">{item.takeItBack}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
