import React, { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-purple-700 text-white p-2.5 flex items-center justify-between">
            {/* logo y tutulo */}
            <div className="flex items-center space-x-1">
                <img src="src/assets/images/result_Logo.jpg" alt="Logo" className="w-15 h-20" />
                <span className="text-3xl font-bold">UrbanFashionTrends</span>
            </div>

            {/* navegación pantalla grande */}
            <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-3xl font-bold no-underline hover:text-white">Inicio</a>
                <a href="/about" className="text-3xl font-bold no-underline hover:text-white">Acerca de</a>
                <a href="/products" className="text-3xl font-bold no-underline hover:text-white">Productos</a>
                <a href="/contact" className="text-3xl font-bold no-underline hover:text-white">Contactos</a>
            </nav>

            {/* botom de menu hamburguesa al achicarse */}
            <button onClick={toggleMenu} className="md:hidden p-0">
                <span className="sr-only">Abrir menú</span>
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </button>

            {/* menu cuando se despliega en pantalla pequeña */}
            {isOpen && (
                <nav className="absolute top-24 left-0 w-full bg-purple-700 text-center md:hidden space-y-2 py-4">
                    <a href="/" className="block text-3xl font-bold no-underline hover:text-white">Inicio</a>
                    <a href="/about" className="block text-3xl font-bold no-underline hover:text-white">Acerca de</a>
                    <a href="/products" className="block text-3xl font-bold no-underline hover:text-white">Productos</a>
                    <a href="/contact" className="block text-3xl font-bold no-underline hover:text-white">Contactos</a>
                </nav>
            )}
        </header>
    );
}

export default Header;