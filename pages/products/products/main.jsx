import React, { useState } from 'react';
import { Axios } from '../../../api/axios';
import Loading from '../../../components/Loading';
export default function Main() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async (url) => {
    const response = await Axios.get(url);
    setProducts(response.data);
    setLoading(true);
  };
  getProducts('/product/');
  return (
    <div className="flex min-h-[calc(100vh-70px)] w-full bg-[#FFFFE1]">
      <div className="w-full md:w-2/3">
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
        <div className="mx-auto h-[450px] w-[90%] max-w-[800px] overflow-x-auto bg-white">
          {loading ? (
            <table className="w-full">
              <thead>
                <tr className="bg-[#FFFAFA]">
                  <th className="border">Tovar Kodi</th>
                  <th className="border">Tovar Nomi</th>
                  <th className="border">Kelgan Narx</th>
                  <th className="border">Sotiladigan Narxi</th>
                  <th className="border">Qoldiq</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id} className="text-center">
                      <td className="h-[40px] border">{product.code}</td>
                      <td className="h-[40px] border">{product.name}</td>
                      <td className="h-[40px] border">
                        {product.incoming_price} So'm
                      </td>
                      <td className="h-[40px] border">{product.price} So'm</td>
                      <td className="h-[40px] border">
                        {product.quantity} So'm
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <div className="w-full py-2 md:w-1/3">
        <div className="flex w-full flex-wrap justify-center gap-3">
          <button className="rounded-lg bg-[#14213D] py-2 px-4 text-[#FCA311]">
            Tavar qo'shish
          </button>
          <button className="rounded-lg bg-[#14213D] py-2 px-4 text-[#FCA311]">
            Hajm qo'shish
          </button>
          <button className="rounded-lg bg-[#14213D] py-2 px-4 text-[#FCA311]">
            Arxiv
          </button>
        </div>
        <div className="flex flex-col items-start gap-2 pl-3 pt-3">
          <p>
            Tovar nomi: <span></span>
          </p>
          <p>
            Umumiy hajmi: <span></span>
          </p>
          <p>
            Olingan vaqt: <span></span>
          </p>
          <p>
            Umumiy harid summasi: <span></span>
          </p>
          <p>
            To'landi: <span></span>
          </p>
          <p>
            Qarz: <span></span>
          </p>
          <button className="rounded-lg bg-[#14213D] py-2 px-4 text-[#FCA311]">
            To'lov qilish
          </button>
        </div>
        <div className="my-2 mr-2 h-[200px] w-[95%] max-w-[400px] overflow-auto border bg-white">
          <table className="text-sm">
            <thead>
              <tr>
                <th className="border">Tovar nomi</th>
                <th className="border">To'lov summasi</th>
                <th className="border">Vaqt</th>
                <th className="border">O'chirish</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border">Silver 1002</td>
                <td className="border">100000 so'm</td>
                <td className="border">2023/02/27 13:32</td>
                <td className="border">
                  <button className="rounded-lg bg-red-500 py-1 px-2 text-white">
                    O'chirish
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border">Silver 1002</td>
                <td className="border">100000 so'm</td>
                <td className="border">2023/02/27 13:32</td>
                <td className="border">
                  <button className="rounded-lg bg-red-500 py-1 px-2 text-white">
                    O'chirish
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border">Silver 1002</td>
                <td className="border">100000 so'm</td>
                <td className="border">2023/02/27 13:32</td>
                <td className="border">
                  <button className="rounded-lg bg-red-500 py-1 px-2 text-white">
                    O'chirish
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border">Silver 1002</td>
                <td className="border">100000 so'm</td>
                <td className="border">2023/02/27 13:32</td>
                <td className="border">
                  <button className="rounded-lg bg-red-500 py-1 px-2 text-white">
                    O'chirish
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border">Silver 1002</td>
                <td className="border">100000 so'm</td>
                <td className="border">2023/02/27 13:32</td>
                <td className="border">
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
