import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Menu() {
  const router = useRouter();
  return (
    <div className="flex border-b-2 border-blue-500 min-h-[70px] items-center">
      <Link
        href={'/sale/goods'}
        className={
          'p-4 duration-300 hover:bg-blue-500 hover:text-white ' +
          (router.pathname === '/sale/goods' ? ' bg-blue-500 text-white' : null)
        }
      >
        Tovarlar
      </Link>
      <Link
        href={'/sale/trading-history'}
        className={
          'p-4 duration-300 hover:bg-blue-500 hover:text-white ' +
          (router.pathname === '/sale/trading-history' ? ' bg-blue-500 text-white' : null)
        }
      >
        Savdo Tarixi
      </Link>
    </div>
  );
}
