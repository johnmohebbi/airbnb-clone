//fonts
import { Nunito } from "next/font/google";
//components
import Navvbar from "./components/navbar/Navvbar";
import Modal from "./components/modals/Modal";
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
        <Modal isOpen title="hello world"  />
        <Navvbar />
        {children}
      </body>
    </html>
  );
}
