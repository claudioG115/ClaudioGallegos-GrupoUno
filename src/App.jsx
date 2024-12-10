import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Loading from './components/Loading/Loading';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ItemDetail from './components/ItemDetail/ItemDetail';
import asyncMock from './data/asyncMock';

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        const fetchedProducts = await asyncMock();
        setProducts(fetchedProducts);
        setLoading(false);
    };

    useEffect(() => {
        if (currentPage === 'home' || currentPage === 'products') {
            fetchProducts();
        }
    }, [currentPage]);

    const filteredProducts = category
        ? products.filter((product) => product.category === category)
        : products;

    const handlePageChange = (page) => {
        setSelectedProduct(null);
        if (page === 'products') {
            fetchProducts();
        }
        setCurrentPage(page);
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setCurrentPage('itemDetail');
    };

    const updateCart = (productId, size, quantity) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.id === productId && item.size === size
            );

            if (quantity === 0) {
                return prevCart.filter(
                    (item) => !(item.id === productId && item.size === size)
                );
            }

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === productId && item.size === size
                        ? { ...item, quantity }
                        : item
                );
            }

            const product = products.find((prod) => prod.id === productId);
            return [
                ...prevCart,
                { ...product, size, quantity, image: product.image },
            ];
        });
    };

    const renderPage = () => {
        if (selectedProduct) {
            return (
                <ItemDetail
                    product={selectedProduct}
                    updateCart={updateCart}
                />
            );
        }

        switch (currentPage) {
            case 'home':
                return (
                    <>
                        <Home />
                        {loading ? (
                            <Loading />
                        ) : (
                            <Products
                                products={products}
                                onProductClick={handleProductClick}
                            />
                        )}
                    </>
                );
            case 'about':
                return <About />;
            case 'products':
                return loading ? (
                    <Loading />
                ) : (
                    <Products
                        products={filteredProducts}
                        onProductClick={handleProductClick}
                    />
                );
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <Header
                setCurrentPage={handlePageChange}
                cart={cart}
                updateCart={updateCart}
                setCategory={setCategory}
            />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default App;