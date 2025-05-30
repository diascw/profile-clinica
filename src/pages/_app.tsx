import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/provider";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div
        className={`${inter.className} antialiased min-h-screen bg-background font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
