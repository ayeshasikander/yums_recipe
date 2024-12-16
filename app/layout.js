import localFont from "next/font/local";
import "./globals.css";

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

export const metadata = {
  title: "Yum Recipe",
  description: "Yummy recipes by me",
};

export default function RootLayout({ children }) {
  let header = (
    <header>
      <h1 className="text-5xl text-red-600">Yum Recipe</h1>
    </header>
  );
  let footer=(
    <footer>
      <p>@{new Date().getFullYear()} Yum Recipe_All rights reserved.</p>
    </footer>
  )
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
