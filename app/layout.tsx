import "./globals.css";

export const metadata = {
  title: "poksi.fr — Tech • Crypto • IA",
  description: "Le hub tech & crypto de Poksi : articles, outils, projets.",
  openGraph: {
    title: "poksi.fr",
    description: "Tech • Crypto • IA",
    images: ["/og.png"],
  },
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-white dark:bg-black text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
