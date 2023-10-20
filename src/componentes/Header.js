import React from 'react';

function Header() {
  return (
    <header className="bg-green-500 p-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold">
            Blog Herbolario
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
