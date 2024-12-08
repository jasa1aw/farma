'use client';

import type { PropsWithChildren } from 'react';
import { Root } from '@/components/Root/Root';
import localFont from 'next/font/local';
import './globals.css';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/store/store';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }: PropsWithChildren) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Root>
          <Provider store={storeRef.current}>
            <div>{children}</div>
          </Provider>
        </Root>
      </body>
    </html>
  );
}