import React from 'react';
import ItemList from '../ItemList/ItemList';

function Products({ products, onProductClick }) {
    return (
        <section className="py-10 max-w-full mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Productos</h2>
            <ItemList items={products} onProductClick={onProductClick} />
        </section>
    );
}

export default Products;