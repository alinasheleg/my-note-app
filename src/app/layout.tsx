import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import NavigationMenu from '@/components/common/NavigationMenu';
import Footer from '@/components/common/Footer';

export const metadata = {
  title: 'Заметки',
  description: 'Организация заметок',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <NavigationMenu />
        <main className="container mt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
