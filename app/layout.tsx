import ContainerDefault from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";





export const metadata: Metadata = {
  title: "AAA",
  description: "aaaaaaa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR">
      <body className="min-h-full flex flex-col">
        <ContainerDefault>
          <Header>

          </Header>

          {children}
          <Footer></Footer>
        </ContainerDefault>
          
      </body>
    </html>
  );
}
