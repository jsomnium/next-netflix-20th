import Footer from "@/components/Footer";


export default function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative w-[375px] h-[100vh]">
        {children}
        <Footer/>
      </body>
    </html>
  );
}
