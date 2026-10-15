import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thế giới nhỏ của lananhiudau",
  description: "Một thế giới nhỏ được làm bằng tình yêu, dành riêng cho lananhiudau."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#D9EEC8"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Caveat:wght@500;600;700&family=Nunito:wght@400;700;800;900&display=swap&subset=vietnamese"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
