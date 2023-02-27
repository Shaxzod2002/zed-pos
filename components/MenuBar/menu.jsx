import React from 'react';
import Link from 'next/link';
import { Links } from './data';
import { useRouter } from 'next/router';
export default function Menu() {
  const router = useRouter();
  return (
    <menu className="my-3 flex w-full flex-col gap-1">
      {Links.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.id}
            className={router.pathname.includes(link.href) ? 'active' : null}
          >
            {link.text} {link.icon}
          </Link>
        );
      })}
    </menu>
  );
}
