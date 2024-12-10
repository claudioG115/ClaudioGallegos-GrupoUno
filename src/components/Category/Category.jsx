import React, { useState } from 'react';

function Category({ setCategory }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (category) => {
        setCategory(category);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* botom para abrir o mostrar categoria */}
            <button
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800"
                onClick={toggleMenu}
            >
                Categorías
            </button>

            {/* menu desplegable */}
            {isOpen && (
                <div className="absolute top-10 right-0 bg-white text-black rounded shadow-lg w-40">
                    <ul className="flex flex-col">
                        <li
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleSelect('Nike Shox')}
                        >
                            Nike Shox
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleSelect('Nike Air')}
                        >
                            Nike Air
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleSelect('Nike Otros')}
                        >
                            Nike Otros
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Category;