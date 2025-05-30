import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/provider";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div
        className={`${inter.className} antialiased min-h-screen font-sans bg-gradient-to-br from-blue-700 via-teal-500 to-green-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
