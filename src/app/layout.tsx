import "animate.css";
import "antd/dist/reset.css";
import "@/assets/styles/globalStyle.scss";
import { Philosopher } from "next/font/google";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import AntdComponentsWrapper from "@/layouts/components/AntdComponentsWrapper";
import DefaultLayout from "@/layouts/default";

export const metadata: Metadata = {
  title: "Westwear",
  description:
    "Westwear offers stylish and comfortable streetwear and casual clothes for men and women. Find quality t-shirts, hoodies, jackets, and pants designed for everyday wear. Upgrade your wardrobe with trendy, versatile fashion made from premium materials.",
};

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={philosopher.className}>
      <body>
        <AntdComponentsWrapper>
          <DefaultLayout>{children}</DefaultLayout>
        </AntdComponentsWrapper>
      </body>
    </html>
  );
}
