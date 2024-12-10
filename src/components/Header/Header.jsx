import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function Header({ setCurrentPage, cart, updateCart, setCategory }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const toggleCategoryMenu = () => {
        setIsCategoryOpen(!isCategoryOpen);
};

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

return (
    <header className="bg-purple-700 text-white p-2.5 flex items-center justify-between">
        {/* logo y tutulo */}
        <div className="flex items-center space-x-2">
            <img src="src/assets/images/result_Logo.jpg" alt="Logo" className="w-15 h-20" />
            <span className="text-3xl font-bold">UrbanFashionTrends</span>
        </div>

        {/* navegacion para pantalla grande */}
        <nav className="hidden md:flex space-x-8 relative">
            <button
                onClick={() => setCurrentPage('home')}
                className="text-3xl font-bold no-underline hover:text-white"
            >
                Inicio
            </button>

            {/* botom de productos y submenu */}
            <div className="relative flex items-center">
                <button
                    onClick={() => {
                        setCategory(null);
                        setCurrentPage('products');
                    }}
                    className="text-3xl font-bold no-underline hover:text-white"
                >
                    Productos
                </button>
                <button
                    onClick={toggleCategoryMenu}
                    className="text-3xl font-bold no-underline hover:text-white ml-2"
                    aria-label="Abrir submenú de categorías"
                >
                    {isCategoryOpen ? '▲' : '▼'}
                </button>

                {/* submenu de las categorias */}
                {isCategoryOpen && (
                    <div className="absolute left-0 bg-white text-black rounded shadow-lg mt-20 py-2 w-40">
                        <button
                            onClick={() => {
                                setCategory('Nike Shox');
                                setCurrentPage('products');
                                setIsCategoryOpen(false);
                            }}
                            className="block px-4 py-2 text-left hover:bg-gray-200 w-full"
                        >
                            Nike Shox
                        </button>
                        <button
                            onClick={() => {
                                setCategory('Nike Air');
                                setCurrentPage('products');
                                setIsCategoryOpen(false);
                            }}
                            className="block px-4 py-2 text-left hover:bg-gray-200 w-full"
                        >
                            Nike Air
                        </button>
                        <button
                            onClick={() => {
                                setCategory('Nike Otros');
                                setCurrentPage('products');
                                setIsCategoryOpen(false);
                            }}
                            className="block px-4 py-2 text-left hover:bg-gray-200 w-full"
                        >
                            Nike Otros 
                        </button>
                    </div>
                )}
            </div>

            <button
                onClick={() => setCurrentPage('about')}
                className="text-3xl font-bold no-underline hover:text-white"
            >
                Acerca de
            </button>
            <button
                onClick={() => setCurrentPage('contact')}
                className="text-3xl font-bold no-underline hover:text-white"
            >
                Contactos
            </button>
        </nav>

        {/* boton carrito */}
        <div className="relative">
            <FaShoppingCart size={60} className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-7 h-7 flex items-center justify-center">
                    {totalItems}
                </span>
            )}
        </div>

        {/* carrito */}
        {isOpen && (
            <div className="absolute top-16 right-8 bg-white text-black rounded shadow-lg w-70 p-7">
                <h2 className="text-lg font-bold">Carrito de Compras</h2>
                {cart.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    <ul>
                        {cart.map((item) => (
                            <li
                                key={`${item.id}-${item.size}`}
                                className="flex items-center gap-4 py-2 border-b"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-18 rounded"
                                />
                                <div>
                                    <p>{item.name}</p>
                                    <p>Talla: {item.size}</p>
                                    <p>
                                        {item.quantity} x ${item.price}
                                    </p>
                                </div>
                                <button
                                    className="text-red-500"
                                    onClick={() => updateCart(item.id, item.size, 0)}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )}
    </header>
);
}

export default Header;