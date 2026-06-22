import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';

export const metadata = {
  title: 'Portfolio - AI Media',
  description:
    'Selected AI Media work across websites, campaigns, content systems, and design for AV and smart home businesses.',
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
