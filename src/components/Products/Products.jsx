import React from 'react';
import ItemList from '../ItemList/ItemList';

function Products({ products }) {
    return (
        <div id="productos" className="py-10">
            <h2 className="text-4xl font-bold text-center mb-8">Productos</h2>
            <ItemList items={products} />
        </div>
    );
}

export default Products;