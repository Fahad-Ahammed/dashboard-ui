import { Nunito, Montserrat, Lato } from "next/font/google";

export const nunito = Nunito({ subsets: ["latin"], weight: ["600"] });
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const lato = Lato({ subsets: ["latin"], weight: ["400"] });
