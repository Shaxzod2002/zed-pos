import Head from 'next/head';
import React from 'react';
import MenuBar from '../../../components/MenuBar';
import Menu from '../menu';
import Main from './main';

export default function Products() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Maxsulotlar</title>
      </Head>
      <div className="flex">
        <MenuBar />
        <div className='w-full'>
          <Menu />
          <Main />
        </div>
      </div>
    </>
  );
}
