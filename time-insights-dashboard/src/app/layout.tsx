import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Time Insights Dashboard',
  description: 'Dashboard built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen bg-gray-100`}>
        <div className=''>

        <Sidebar />
        </div>
        <main className="flex-1 p-8 overflow-y-auto" style={{backgroundColor:'#F0F4F8'}}>{children}</main>
      </body>
    </html>
  );
}