import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Logo from '../common/Logo';
import { AppContext } from '../context/AppContext';
import { DAILY, MONTHLY } from '../context/constants';

function Navigation() {
  const router = useRouter();

  const { slug } = useContext(AppContext);

  const active = 'underline';

  const periods = [DAILY, MONTHLY];

  const isActive = (path) => {
    return router.asPath.startsWith(`/${path}`) ? active : '';
  };

  return (
    <section className="text-gray-700 body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Logo />
          <span className="ml-3 text-xl">Salat</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex items-center text-base justify-center">
          {periods.map((p) => (
            <Link key={p} href="/[periodicity]/[slug]" as={`/${p}/${slug}`}>
              <a
                className={`mr-5 hover:text-gray-900 capitalize ${isActive(p)}`}
              >
                {p}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <a
              className={`mr-5 hover:text-gray-900 capitalize ${isActive(
                'contact'
              )}`}
            >
              contact
            </a>
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default Navigation;
