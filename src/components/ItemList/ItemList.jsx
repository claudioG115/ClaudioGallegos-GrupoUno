import React from 'react';

function ItemList({ items, onProductClick }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-4">
            {items.map(item => (
                <div 
                    key={item.id} 
                    className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 cursor-pointer"
                    onClick={() => onProductClick(item)}
                >
                    {/* imagen del producto */}
                    <div className="w-full h-50 bg-gray-100">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded-t-lg"
                        />
                    </div>
                    
                    {/* informaciom del producto */}
                    <div className="p-3 text-center">
                        <h2 className="text-3xl font-bold mb-4">{item.name}</h2>
                        <p className="text-3xl font-semibold text-green-600 mt-8">${item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;