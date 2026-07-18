import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'AirPrestige · Premium HVAC Services',
  description: 'Elite cooling and heating mastery with certified technicians, transparent pricing, and 24/7 emergency care.',
  keywords: 'HVAC, AC repair, heating repair, air conditioning, emergency HVAC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}