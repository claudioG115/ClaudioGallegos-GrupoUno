import React, { useState } from "react";

function ItemDetail({ product, updateCart }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("M");

    const handleQuantityChange = (amount) => {
    if (quantity + amount >= 1 && quantity + amount <= product.stock) {
        setQuantity(quantity + amount);
    }
};

    const handleSizeChange = (size) => {
        setSelectedSize(size);
};

    const addToCart = () => {
        updateCart(product.id, selectedSize, quantity);
        agregarALCarrito(product);
};

    return (
        <section className="max-w-7xl mx-auto py-12 px-4">
            <div className="flex flex-col lg:flex-row items-start gap-10">
                {/* imagen del producto */}
                <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* información del producto */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <h2 className="text-4xl font-bold">{product.name}</h2>

                    {/* precio */}
                    <p className="text-4xl font-bold text-blue-600">
                        ${product.price.toLocaleString()}
                    </p>

                    {/* descripcion */}
                    <p className="text-2xl font-semibold text-gray-600">
                        {product.description}
                    </p>

                    {/* tallas disponibles */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">Tallas disponibles:</h3>
                        <div className="flex gap-4">
                            {["S", "M", "L"].map((size) => (
                                <button
                                    key={size}
                                    className={`px-8 py-2 border rounded ${
                                        selectedSize === size
                                            ? "bg-black text-white"
                                            : "bg-white text-black"
                                    }`}
                                    onClick={() => handleSizeChange(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* cantidad */}
                    <div className="flex items-center gap-4">
                        <span className="text-lg">Cantidad:</span>
                        <button
                            className="px-6 py-3 bg-gray-200 rounded"
                            onClick={() => handleQuantityChange(-1)}
                            disabled={quantity <= 1}
                        >
                            -
                        </button>
                        <span className="text-xl font-bold">{quantity}</span>
                        <button
                            className="px-6 py-3 bg-gray-200 rounded"
                            onClick={() => handleQuantityChange(1)}
                            disabled={quantity >= product.stock}
                        >
                            +
                        </button>
                        <span className="text-xl text-gray-500">
                            (+{product.stock} disponibles)
                        </span>
                    </div>

                    {/* precio total */}
                    <p className="text-2xl font-semibold">
                        Precio Total: ${Number(product.price * quantity).toLocaleString()}
                    </p>

                    {/* botones */}
                    <div className="flex gap-4">
                        <button
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold"
                            disabled={product.stock === 0}
                        >
                            Comprar ahora
                        </button>
                        <button
                            className="px-6 py-3 bg-blue-100 text-blue-600 rounded-lg text-lg font-semibold"
                            onClick={addToCart}
                            disabled={product.stock === 0}
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemDetail;