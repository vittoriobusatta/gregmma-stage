import clsx from 'clsx';
import Image from 'next/image';
import logo from 'public/logo.png';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <Image
      src={logo}
      alt="Logo"
      className={clsx('inline-block', props.className)}
      width={40}
      height={40}
    />
  );
}
