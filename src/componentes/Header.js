import React from 'react';

function Header() {
  return (
    <header className="bg-green-500 p-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold">
            Blog Herbolario
          </div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="text-white hover:text-green-200 transition duration-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/acerca-de"
                className="text-white hover:text-green-200 transition duration-300"
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="text-white hover:text-green-200 transition duration-300"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
