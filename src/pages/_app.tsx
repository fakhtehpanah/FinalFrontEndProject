import { Layouts } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato, Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global> {`
    html {
      font-family: ${quicksand.style.fontFamily}, sans-serif;
      --font-lato: ${lato.style.fontFamily}, sans-serif;
      }`}

    </style>
      <Layouts>
      <Component {...pageProps} />
      </Layouts>
    </>
  )
  ;
}
