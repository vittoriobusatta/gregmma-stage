'use client';
import Image from 'next/image';
import titleSrc from '/public/title.svg';
import titleSrcMobile from '/public/titleMobile.svg';
import Link from 'next/link';

export function Landing() {
  return (
    <section className="landing">
      <div className="video-shadow"></div>
      <video className="video--bg" autoPlay loop muted playsInline>
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="landing__content">
        <Image className="landing__title" src={titleSrc} alt="GregMMA" width={1460} height={275} />
        <Image
          className="landing__title-mobile"
          src={titleSrcMobile}
          alt="GregMMA"
          width={500}
          height={300}
        />
        <Link
          href={'/product/gregmma-stage?ticket+type=Pass+Participant'}
          className="rounded-full px-4 py-2 uppercase"
        >
          Réserver ma place
        </Link>
      </div>
    </section>
  );
}
