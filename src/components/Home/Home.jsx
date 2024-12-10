import React from 'react';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[url('src/assets/images/fondo.jpg')] bg-cover bg-center p-4">
            <h1 className="text-6xl font-bold mb-4 text-white">Bienvenido</h1>
            <p className="text-lg text-gray-200">Explora nuestra tienda de moda urbana.</p>
        </div>
    );
}

export default Home;