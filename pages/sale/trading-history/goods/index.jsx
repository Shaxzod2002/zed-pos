import React from 'react';

export default function Googs() {
  let i = 0;
  const data = [
    {
      id: i++,
      order: 20,
      customerName: 'Umarali',
      totalAmount: "0 so'm",
      discount: "0 so'm",
      amountSold: "0 so'm",
      customerPaid: "0 so'm",
      debt: "0 so'm",
      orderTime: '24/11/2022',
    },
    {
      id: i++,
      order: 20,
      customerName: 'Umarali',
      totalAmount: "0 so'm",
      discount: "0 so'm",
      amountSold: "0 so'm",
      customerPaid: "0 so'm",
      debt: "0 so'm",
      orderTime: '24/11/2022',
    },
    {
      id: i++,
      order: 20,
      customerName: 'Umarali',
      totalAmount: "0 so'm",
      discount: "0 so'm",
      amountSold: "0 so'm",
      customerPaid: "0 so'm",
      debt: "0 so'm",
      orderTime: '24/11/2022',
    },

    {
      id: i++,
      order: 20,
      customerName: 'Umarali',
      totalAmount: "0 so'm",
      discount: "0 so'm",
      amountSold: "0 so'm",
      customerPaid: "0 so'm",
      debt: "0 so'm",
      orderTime: '24/11/2022',
    },
    {
      id: i++,
      order: 20,
      customerName: 'Umarali',
      totalAmount: "0 so'm",
      discount: "0 so'm",
      amountSold: "0 so'm",
      customerPaid: "0 so'm",
      debt: "0 so'm",
      orderTime: '24/11/2022',
    },
    {
      id: i++,
      order: 20,
      customerName: 'Umarali',
      totalAmount: "0 so'm",
      discount: "0 so'm",
      amountSold: "0 so'm",
      customerPaid: "0 so'm",
      debt: "0 so'm",
      orderTime: '24/11/2022',
    },
    {
      id: i++,
      order: 20,
      customerName: 'Umarali',
      totalAmount: "0 so'm",
      discount: "0 so'm",
      amountSold: "0 so'm",
      customerPaid: "0 so'm",
      debt: "0 so'm",
      orderTime: '24/11/2022',
    },
    {
      id: i++,
      order: 20,
      customerName: 'Umarali',
      totalAmount: "0 so'm",
      discount: "0 so'm",
      amountSold: "0 so'm",
      customerPaid: "0 so'm",
      debt: "0 so'm",
      orderTime: '24/11/2022',
    },
    {
      id: i++,
      order: 20,
      customerName: 'Umarali',
      totalAmount: "0 so'm",
      discount: "0 so'm",
      amountSold: "0 so'm",
      customerPaid: "0 so'm",
      debt: "0 so'm",
      orderTime: '24/11/2022',
    },
    {
      id: i++,
      order: 20,
      customerName: 'Umarali',
      totalAmount: "0 so'm",
      discount: "0 so'm",
      amountSold: "0 so'm",
      customerPaid: "0 so'm",
      debt: "0 so'm",
      orderTime: '24/11/2022',
    },
    {
      id: i++,
      order: 20,
      customerName: 'Umarali',
      totalAmount: "0 so'm",
      discount: "0 so'm",
      amountSold: "0 so'm",
      customerPaid: "0 so'm",
      debt: "0 so'm",
      orderTime: '24/11/2022',
    },
  ];
  return (
    <div className="h-[calc(100vh-180px)] w-full overflow-auto bg-white md:w-[48%]">
      <table>
        <thead>
          <tr>
            <th className="border p-2">Buyurtma</th>
            <th className="border p-2">Mijoz ismi</th>
            <th className="border p-2">Umumiy summa</th>
            <th className="border p-2">Chegirma</th>
            <th className="border p-2">Sotilgan summa</th>
            <th className="border p-2">Mijoz to'ladi</th>
            <th className="border p-2">Qarz</th>
            <th className="border p-2">Buyurtma vaqti</th>
            <th className="border p-2">C</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td className="border p-2">{item.order}</td>
                <td className="border p-2">{item.customerName}</td>
                <td className="border p-2">{item.totalAmount}</td>
                <td className="border p-2">{item.discount}</td>
                <td className="border p-2">{item.amountSold}</td>
                <td className="border p-2">{item.customerPaid}</td>
                <td className="border p-2">{item.debt}</td>
                <td className="border p-2">{item.orderTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
