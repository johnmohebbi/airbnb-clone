//fonts
import { Nunito } from "next/font/google";
//components
import Navvbar from "./components/navbar/Navvbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";
//css
import "./globals.css";
import LoginModal from "./components/modals/LoginModal";
import { getCurrentUser } from "./actions/getCurrentUser";

export const metadata = {
  title: "Airbnb",
  description: "airbnb clone",
};
const font = Nunito({ subsets: ["latin"] });
export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navvbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
