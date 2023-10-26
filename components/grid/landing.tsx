import Image from 'next/image';
import titleSrc from '/public/title.svg';
import Link from 'next/link';

export async function Landing() {
  return (
    <section className="landing">
      <div className="video-shadow"></div>
      <video className="video--bg" autoPlay loop muted playsInline>
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="landing__content">
        <Image className="landing__title" src={titleSrc} alt="GregMMA" width={1460} height={275} />
        <Link href={'/product/gregmma-stage'} className="rounded-full px-4 py-2 uppercase">
          Réserver ma place
        </Link>
      </div>
    </section>
  );
}
