import axios from 'axios';
import React from 'react';
import Menu from '../menu';
import NewGoodsOrder from './new-goods-order';
import Products from './products';

function Main({ data, error }) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
  return (
    <div className="min-h-[calc(100vh-70px)] w-full bg-[#DCDCDC] md:w-[calc(100%-250px)]">
      <Menu />
      <div className="min-h-[550px] bg-[#FFFFE1] flex">
        <Products />
        <NewGoodsOrder />
      </div>
    </div>
  );
}

Menu.getInitialProps = async function () {
  try {
    const response = await axios.get(
      'https://zedpos.pythonanywhere.com/product/',
    );
    const data = await response.data;
    return { data };
  } catch (error) {
    return { error };
  }
};

export default Main;
