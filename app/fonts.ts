import localFont from "next/font/local";

export const akkurat = localFont({
  src: [
    {
      path: "./fonts/Akkurat.ttf",
      weight: "400", // 'normal' is typically 400
      style: "normal",
    },
    // {
    //   path: "../fonts/Akkurat.ttf",
    //   weight: "700", // 'bold' is typically 700
    //   style: "normal",
    // },
  ],
  display: "swap",
  // This is the key part for Tailwind integration:
  variable: "--font-akkurat",
});
