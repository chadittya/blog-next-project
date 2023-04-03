import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Galih Family's Blog",
  description: "Galih Arizza Family Storytales Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
