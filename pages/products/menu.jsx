import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
export default function Menu() {
  const router = useRouter();
  return (
    <div className="flex min-h-[70px] w-full items-center bg-[#E1E1E1]">
      <Link
        href={'/products/products'}
        className={
          ' py-2 px-4 ' +
          (router.pathname === '/products/products'
            ? ' bg-black text-white'
            : null)
        }
      >
        Maxsulotlar
      </Link>
      <Link
        href={'/products/archival-products'}
        className={
          ' py-2 px-4 ' +
          (router.pathname === '/products/archival-products'
            ? ' bg-black text-white'
            : null)
        }
      >
        Arxiv Maxsulotlar
      </Link>
    </div>
  );
}
