// 

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextAuthProvider } from "@/lib/providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider>
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}
