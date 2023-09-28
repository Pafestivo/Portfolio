import { Lato, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const mergeOne = localFont({
  src: "../customFonts/MergeOne-Regular.ttf",
});
