import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Error404 from '@/images/Error404.gif';
import Head from 'next/head';
export default function PageNoteFound() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>404 page</title>
      </Head>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <Link href={'/home'} style={{ color: 'black' }}>
          <h1 className="text-xl font-bold text-[#14213D] underline hover:text-red-500 md:text-2xl lg:text-3xl">
            Bosh sahifaga qaytish
          </h1>
        </Link>
        <img
          src={Error404}
          className="pointer-events-none w-[700px] max-w-full"
          alt="Error Image"
        />
      </div>
    </>
  );
}
