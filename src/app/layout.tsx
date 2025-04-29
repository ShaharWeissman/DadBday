import Navbar from "@/app/components/Navbar";
import "./globals.css";

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
    <html lang="he">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-[Rubik]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
