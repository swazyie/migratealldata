import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const labelFont = DM_Mono({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Legal Data Migration | Migrate All Data",
  description:
    "Specialist legal data migration for law firms, with documented mappings, controlled execution and verified handover.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${labelFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
