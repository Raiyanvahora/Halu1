import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL("https://haluvietnamtours.com"),
  title: {
    default: "Halu Vietnam Tours — Your Dream Vietnam Holiday Starts Here",
    template: "%s · Halu Vietnam Tours",
  },
  description: site.description,
  keywords: [
    "Vietnam tour packages",
    "Vietnam holiday from India",
    "Halong Bay cruise",
    "Da Nang Golden Bridge",
    "Hoi An tour",
    "Vietnam honeymoon package",
  ],
  openGraph: {
    title: "Halu Vietnam Tours",
    description: site.description,
    type: "website",
    locale: "en_IN",
  },
};

export const viewport = {
  themeColor: "#13345b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
