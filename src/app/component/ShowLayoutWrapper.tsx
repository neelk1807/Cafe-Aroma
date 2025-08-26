// app/component/ShowLayoutWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import Header from './header';
import Footer from './footer';

export default function ShowLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === '/login' || pathname === '/dashboard';

  return (
    <main className="bg-[#fffaf3] text-[#4b2e1e]">
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </main>
  );
}
