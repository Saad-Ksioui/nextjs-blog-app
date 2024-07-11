import Footer from "@components/Footer";
import Nav from "@components/Nav";
import '@styles/globals.css';
import { Toaster } from "react-hot-toast";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col h-full">
      <Toaster position="top-center" />
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>

  )
};

export default RootLayout
