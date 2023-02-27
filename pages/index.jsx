import Head from 'next/head';
import React from 'react';
import Login from '../components/Login';

export default function HomePage() {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ZED POS</title>
      </Head>
      <div className="flex">
        <Login />
      </div>
    </>
  );
}