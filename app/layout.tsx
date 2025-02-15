import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://nuruhussen.vercel.app/"),
    title: "Nuru HUssen",
    description:
    "A professional portfolio showcasing projects and skills.",
    generator: "Next.js",
    applicationName: "Nuru Portfolio",
    keywords: [
       
        "React",
        "developer",
        "frontend",
        "nextjs",
        "react",
        "Eldora UI",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Nuru Hussen",
        description:
      "A professional portfolio showcasing projects and skills.",
        url: "https://nuruhussen.vercel.app/",
        siteName: "nuruhussen.vercel.app",
        images: [
            {
                url: "./public/portfolio.jpg",
                width: 1200,
                height: 630,
                alt: "portfolio",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nuru hussen",
        description: "A professional portfolio showcasing projects and skills.",
        creator: "@nuru hussen",
        creatorId: "0000000000",
        images: ["/public/portfolio.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
