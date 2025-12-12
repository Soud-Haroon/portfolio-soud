import { GoogleTagManager } from "@next/third-parties/google";
import { Space_Grotesk } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import { personalData } from "@/utils/data/personal-data";
import "./css/card.scss";
import "./css/globals.scss";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: `Portfolio of ${personalData.name} - ${personalData.designation}`,
  description: personalData.description,
  icons: {
    icon: '/soud.jpg',
    shortcut: '/soud.jpg',
    apple: '/soud.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className={`font-sans bg-black text-white antialiased`}> 
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] z-10">
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute top-20 left-10 w-[600px] h-[300px] bg-pink-glow blur-3xl rounded-full animate-pulse opacity-5" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-20 right-10 w-[600px] h-[300px] bg-purple-glow blur-3xl rounded-full animate-pulse opacity-5" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
          </div>
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
