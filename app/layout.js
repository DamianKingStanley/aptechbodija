import "../globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aptechbodija.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aptech Bodija | Technology Training in Ibadan",
    template: "%s | Aptech Bodija",
  },
  description: "Build practical technology skills at Aptech Bodija in Ibadan. Study web development, cybersecurity, data science, digital marketing, office automation and more.",
  applicationName: "Aptech Bodija",
  keywords: [
    "Aptech Bodija", "computer training in Ibadan", "technology courses in Ibadan", "web development Ibadan",
    "cybersecurity training Ibadan", "data science course Ibadan", "digital marketing training Nigeria",
    "digital forensics course", "office automation training", "student hostel Ibadan", "study abroad scholarships Nigeria",
  ],
  authors: [{ name: "Aptech Bodija" }],
  creator: "Aptech Bodija",
  publisher: "Aptech Bodija",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }, { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "Aptech Bodija",
    title: "Aptech Bodija | Practical Technology Training in Ibadan",
    description: "Career-focused technology training, student hostels and international progression opportunities in Ibadan.",
    images: [{ url: "/android-chrome-512x512.png", width: 512, height: 512, alt: "Aptech Bodija" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aptech Bodija | Practical Technology Training in Ibadan",
    description: "Learn technology skills that create real career opportunities at Aptech Bodija.",
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1, "max-snippet": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
