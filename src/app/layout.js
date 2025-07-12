import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { NavbarProvider } from "@/Context/NavbarContext";
import Footer from "../Components/footer/page";
import Navbar from "../Components/Navbar/page";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const renoric = localFont({ src: "./fonts/Renoric.otf" });

export const metadata = {
  title: "Premium Gym in Kochi | Unit 45 Fitness",
  description:
    "Join us at our premium gym in Kochi for a fitness experience like no other. Achieve your fitness goals with top-notch equipment and expert trainers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
        // className={`${poppins.className} ${renoric.className} antialiased`}
      >
        <NavbarProvider>
          <Navbar className={renoric.className} />
          <main className={renoric.className}>{children}</main>
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  );
}
