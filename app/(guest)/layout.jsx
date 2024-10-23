"use client"
import { SessionProvider } from 'next-auth/react';
import NavBar from '../componets/Navbar';
import Footer from '../componets/Footer';

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
            <NavBar/>
            
          {children}
          <Footer/>
        </SessionProvider>
      </body>
    </html>
  );
}
