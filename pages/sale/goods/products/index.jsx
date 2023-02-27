import React from 'react';

export default function Products() {
  const data = [
    {
      id: 1,
      code: 1001,
      name: 'Silver 1002',
      cost: "40,500 so'm",
      rest: '172.25 Kv.Meter',
      comment: '',
    },
    {
      id: 2,
      code: 1002,
      name: 'Silver 1003',
      cost: "20,500 so'm",
      rest: '344.25 Kv.Meter',
      comment: '',
    },
    {
      id: 3,
      code: 1003,
      name: 'Silver 1004',
      cost: "145,500 so'm",
      rest: '122.25 Kv.Meter',
      comment: '',
    },
    {
      id: 4,
      code: 1004,
      name: 'Silver 1005',
      cost: "456,500 so'm",
      rest: '432.25 Kv.Meter',
      comment: '',
    },
    {
      id: 5,
      code: 1005,
      name: 'Silver 1006',
      cost: "123,500 so'm",
      rest: '123.25 Kv.Meter',
      comment: '',
    },
    {
      id: 6,
      code: 1006,
      name: 'Silver 1007',
      cost: "65,500 so'm",
      rest: '54.25 Kv.Meter',
      comment: '',
    },
    {
      id: 7,
      code: 1007,
      name: 'Silver 1008',
      cost: "30,500 so'm",
      rest: '23.25 Kv.Meter',
      comment: '',
    },
    {
      id: 7,
      code: 1007,
      name: 'Silver 1008',
      cost: "30,500 so'm",
      rest: '23.25 Kv.Meter',
      comment: '',
    },
    {
      id: 7,
      code: 1007,
      name: 'Silver 1008',
      cost: "30,500 so'm",
      rest: '23.25 Kv.Meter',
      comment: '',
    },
    {
      id: 7,
      code: 1007,
      name: 'Silver 1008',
      cost: "30,500 so'm",
      rest: '23.25 Kv.Meter',
      comment: '',
    },
    {
      id: 7,
      code: 1007,
      name: 'Silver 1008',
      cost: "30,500 so'm",
      rest: '23.25 Kv.Meter',
      comment: '',
    },
    {
      id: 7,
      code: 1007,
      name: 'Silver 1008',
      cost: "30,500 so'm",
      rest: '23.25 Kv.Meter',
      comment: '',
    },
    {
      id: 7,
      code: 1007,
      name: 'Silver 1008',
      cost: "30,500 so'm",
      rest: '23.25 Kv.Meter',
      comment: '',
    },
    {
      id: 7,
      code: 1007,
      name: 'Silver 1008',
      cost: "30,500 so'm",
      rest: '23.25 Kv.Meter',
      comment: '',
    },
    {
      id: 7,
      code: 1007,
      name: 'Silver 1008',
      cost: "30,500 so'm",
      rest: '23.25 Kv.Meter',
      comment: '',
    },
    {
      id: 7,
      code: 1007,
      name: 'Silver 1008',
      cost: "30,500 so'm",
      rest: '23.25 Kv.Meter',
      comment: '',
    },
  ];

  return (
    <div className="w-full md:w-1/2">
      <div className="flex w-full items-center justify-center gap-3 py-2">
        <h3>Tovar nomi</h3>
        <input
          type="search"
          placeholder="Tovar nomini kiriting"
          className="border-b border-b-black bg-white py-2 pl-2 outline-none"
        />
      </div>
      <div className="h-[460px] max-w-[600px] overflow-auto p-2">
        <table className="w-full border bg-white">
          <thead>
            <tr className="border">
              <th className="border">Kodi</th>
              <th className="border">Nomi</th>
              <th className="border">Narxi</th>
              <th className="border">Qoldiq</th>
              <th className="border">Qo'shimcha</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => {
              return (
                <tr
                  key={product.id}
                  className="h-[50px] border duration-300 hover:bg-black/30"
                >
                  <td className="border pl-2">{product.code}</td>
                  <td className="border pl-2">{product.name}</td>
                  <td className="border pl-2">{product.cost}</td>
                  <td className="border pl-2">{product.rest}</td>
                  <td className="border pl-2">{product.comment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
