import React from 'react';

function Footer() {
    return (
        <footer className="bg-purple-700 text-white py-4 text-center">
            <p className="text-3xl">© 2024 UrbanFashionTrends. Todos los derechos reservados.</p>
            <div className="flex justify-center space-x-7 mt-3">
                <a href="https://i.pinimg.com/564x/3d/83/77/3d8377d30835352fd6a1ddd4f04dd1d6.jpg" className="text-3xl font-bold no-underline hover:text-white">Youtube</a>
                <a href="/terms" className="text-3xl font-bold no-underline hover:text-white">Términos de Uso</a>
                <a href="https://github.com/" className="text-3xl font-bold no-underline hover:text-white">GitHub</a>
            </div>
        </footer>
    );
}

export default Footer;