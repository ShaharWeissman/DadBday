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
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
