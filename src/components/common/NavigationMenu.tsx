'use client';

import Link from 'next/link';

export default function NavigationMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">Заметки</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/notes">Все заметки</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/categories">Категории</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/archived">Архив</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
