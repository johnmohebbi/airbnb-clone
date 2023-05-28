//fonts
import { Nunito } from "next/font/google";
//components
import Navvbar from "./components/navbar/Navvbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";
//css
import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "airbnb clone",
};
const font = Nunito({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navvbar />
        {children}
      </body>
    </html>
  );
}
