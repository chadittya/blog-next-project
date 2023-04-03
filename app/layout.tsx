import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles/globals.css";

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
      <body className="mx-auto max-w-2xl px-6">
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
