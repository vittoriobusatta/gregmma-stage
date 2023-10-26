import Navbar from 'components/layout/navbar';
import { ReactNode, Suspense } from 'react';
import './styles/globals.css';
import './styles/main.css';
import StyledComponentsRegistry from './libs/registry';

const { SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body>
          <Navbar />
          <Suspense>
            <main>{children}</main>
          </Suspense>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
