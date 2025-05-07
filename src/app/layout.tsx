import Navbar from "@/app/components/Navbar";
import "./globals.css";
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Dad70",
  description: "Dad’s 70th site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" className={rubik.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
