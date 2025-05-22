import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css';
import NavigationMenu from '@/components/common/NavigationMenu';
import Footer from '@/components/common/Footer';
import NotesLoader from '@/components/NotesLoader'; 

export const metadata = {
  title: 'Заметки',
  description: 'Организация заметок',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <NotesLoader />  {/* <-- добавляем сюда, чтобы данные загрузились при старте */}
        <NavigationMenu />
        <main className="container mt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
