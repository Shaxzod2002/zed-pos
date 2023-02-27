import React from 'react'
import { data } from './data';

export default function Products() {
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
      <div className="max-w-[600px] h-[460px] overflow-auto p-2">
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
