import "./globals.css";
export const metadata = {
  title: "Delhi Heart",
  description: "Delicious food delivered to your door",
  icons: {
    icon: "/favicon.ico",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
