import { NextUIProvider } from '@nextui-org/system';
import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer';
import '../styles/globals.css'; // Custom styles

export const metadata = {
  title: 'Upscale Mobile Bartending',
  description: 'Fresh ingredients and creative cocktails for exclusive events in Ann Arbor, MI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <NextUIProvider>
          <CustomNavbar />
          <main>{children}</main>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
