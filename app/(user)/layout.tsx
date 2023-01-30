import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='bg-[#191A22] bg-hero-pattern text-white  mx-auto '>
        <Header />
        {/* Banner */}
        {children}

        <Footer />
      </body>
    </html>
  )
}
