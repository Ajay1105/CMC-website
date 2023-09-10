import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hacking Health",
  description:
    "Website of hackathon organized by CMCPAC and RTIST NIT Jalandhar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?<generated>" sizes="<generated>" />
      </head>
      <body className={inter.className}>
        {children}
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </body>
    </html>
  );
}
