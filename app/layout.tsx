import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "USA",
  description: "solana transactions fast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-white bg-zinc-900">
        <div className="flex justify-center w-full">{children}</div>

        <span className="w-full text-center text-xs block mt-[-24px]">
          made with ❤️ by hetcon
        </span>
      </body>
    </html>
  );
}
