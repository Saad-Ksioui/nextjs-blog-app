import Footer from "@components/Footer";
import Nav from "@components/Nav";
import '@styles/globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
};

export default RootLayout
