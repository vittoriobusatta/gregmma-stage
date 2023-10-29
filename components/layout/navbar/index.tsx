import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import Link from 'next/link';
import { Suspense } from 'react';
const { SITE_NAME } = process.env;
import LogoIcon from 'components/icons/logo';

export default function Navbar() {
  return (
    <nav className="navbar fixed z-10 flex items-center justify-between p-4 lg:px-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex  md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoIcon />
            <div
              style={{
                color: '#fff'
              }}
              className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block "
            >
              {SITE_NAME}
            </div>
          </Link>
        </div>
        <div className="flex justify-end md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
