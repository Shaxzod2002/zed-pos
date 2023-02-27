import React from 'react';
import { data } from './data';

export default function Googs() {
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
