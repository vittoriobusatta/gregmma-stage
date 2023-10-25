import { Landing } from 'components/grid/landing';
import About from 'components/landing/about';
import Guest from 'components/landing/guest';
import Partners from 'components/landing/partners';
import Program from 'components/landing/program';
import Stage from 'components/landing/stage';
// import Timer from 'components/landing/timer';
import Footer from 'components/layout/footer';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicTimer = dynamic(() => import('../components/landing/timer'), {
  ssr: false
  // loading: () => <p>Chargement...</p>,
});
export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Landing />
      <section className="content">
        <DynamicTimer />
        <Guest />
        <Stage />
        <Program />
        <About />
        <Partners />
      </section>
      <Suspense>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
