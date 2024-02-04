import { Nunito, Montserrat, Lato, Figtree } from "next/font/google";

export const nunito = Nunito({ subsets: ["latin"], weight: ["600","700"] });
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const lato = Lato({ subsets: ["latin"], weight: ["400"] });
export const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400","600"],
});
