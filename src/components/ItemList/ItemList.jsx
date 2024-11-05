import React from 'react';

function ItemList({ items }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {items.map(item => (
                <div key={item.id} className="p-4 bg-white shadow rounded">
                    {/* imagen producto */}
                    <img src={item.image} alt={item.name} className="w-full h-42 object-cover rounded-t" />
                    
                    {/* informacion producto */}
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                        <p className="text-gray-600 mb-4 line-clamp-9">{item.description}</p>
                        <p className="text-lg font-semibold text-green-600">${item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;