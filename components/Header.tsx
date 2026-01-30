import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100 py-6">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center gap-3">
          <div className="bg-stone-900 px-3 py-1 flex items-center justify-center rounded-lg text-white font-serif text-sm font-bold tracking-tighter">no:21</div>
          <h1 className="text-2xl font-serif font-bold tracking-tight text-stone-900">
            pera <span className="text-stone-400 font-light italic">fabrika</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;