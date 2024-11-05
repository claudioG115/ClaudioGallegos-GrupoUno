import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Loading from './components/Loading/Loading';

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            // simulacion de carga de datos
            await new Promise(resolve => setTimeout(resolve, 3500));

            const fetchedProducts = [
        { 
            id: 1, 
            name: 'Nike Shox TL', 
            description: 'El calzado Nike Shox TL trae de regreso el ícono de 2003, esta vez con colores frescos y una parte superior de malla de nailon transpirable de tránsito pesado.El diseño conserva los revestimientos plásticos en la parte superior como el modelo original y, por supuesto, las legendarias columnas de amortiguación largas que seguramente harán que más de uno voltee.', 
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8709d1e8-2c4b-43e2-bc2a-298a77878096/NIKE+SHOX+TL.png', 
            price: '170.000',
        },
        { 
            id: 2, 
            name: 'Nike Air Pegasus 2005', 
            description: 'Una pisada enérgica para cualquier carrera. Vuelve la sensación familiar e ideal para ti que ofrece el Peg para ayudarte a alcanzar tus objetivos. Esta versión ofrece la misma responsividad y soporte neutro que esperas, pero los combina con un look en capas inspirado en los runners de los años 2000.', 
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f6bd68f-1f3d-442f-a61f-9cb8301a84eb/NIKE+AIR+PEGASUS+2005.png', 
            price: '150.000',
        },
        { 
            id: 3, 
            name: 'Ja 2 "Foundation', 
            description: 'El calzado Nike Shox TL trae de regreso el ícono de 2003, esta vez con colores frescos y una parte superior de malla de nailon transpirable de tránsito pesado.El diseño conserva los revestimientos plásticos en la parte superior como el modelo original y, por supuesto, las legendarias columnas de amortiguación largas que seguramente harán que más de uno voltee.', 
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ac1e2295-9fec-4b20-bd4b-8bf44e149a1c/JA+2.png', 
            price: '120.000',
        },
        { 
            id: 4, 
            name: 'Nike Air Max Plus Drift', 
            description: 'Deja que tu actitud tenga la ventaja en el Air Max Plus Drift, una experiencia "Tuned" Air que ofrece una estabilidad y una amortiguación premium. Con la malla aireada, el color degradado y las líneas de diseño onduladas originales, este calzado celebra tu estilo desafiante.', 
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9e1f57a-5910-4088-8de4-326c07cd0173/AIR+MAX+PLUS+DRIFT.png', 
            price: '185.000',
        },
        { 
            id: 5, 
            name: 'Nike Air Max 90', 
            description: 'Amárrate las agujetas y siente el legado. Diseñado en un punto intermedio entre el arte, la música y la cultura, este campeón del calzado de running ayudó a definir los 90. Usado por presidentes, revolucionado por colaboraciones y celebrado a través de combinaciones de colores atípicas, los efectos visuales llamativos, la suela tipo waffle y la amortiguación Air expuesta lo mantienen vivo.', 
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1c5fbad0-79d9-4aec-8f44-c51ca125dc34/AIR+MAX+90.png', 
            price: '130.000',
        },
        { 
            id: 6, 
            name: 'Nike Air Max Pulse Roam', 
            description: 'Los Air Max Pulse Roam se inspiran en sus elegantes predecesores y los mueven en una dirección más funcional. Esto significa durabilidad sin incomodidad y estilo sin esfuerzo. La amortiguación Air con carga estratégica, renovada a partir del suave Air Max 270, ofrece la comodidad en la que confías.', 
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/493f87d4-86f9-4fc5-8c63-ceff5b81a643/NIKE+AIR+MAX+PULSE+ROAM.png', 
            price: '170.000',
        },
        { 
            id: 7, 
            name: 'Nike Air VaporMax 2023 Flyknit', 
            description: '¿Caminaste sobre el Air alguna vez? Ponte los Air VaporMax 2023 para que sepas lo que se siente. La tecnología innovadora se revela en la plantilla perforada (jálala para ver más). La parte superior elástica de Flyknit está hecha con al menos un 20% de material reciclado por peso.', 
            image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/079009a1-9c3e-4246-9290-dd76eaf2c1b8/AIR+VAPORMAX+2023+FK.png', 
            price: '210.000',
        },
        { 
            id: 8, 
            name: 'Nike Air Max 2017', 
            description: 'Los Nike Air Max 2017 ofrecen la sensación de suavidad que tanto te gusta con una unidad Max Air de largo completo. La parte superior cuenta con una confección sin costuras con sujeción y ventilación por zonas, y la espuma moldeada envuelve el mediopié y el talón para brindar una comodidad segura.', 
            image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/bbbwgncnxexhwgbz8qbp/NIKE+AIR+MAX+2017.png', 
            price: '190.000',
        },
        { 
            id: 9, 
            name: 'Nike Full Force Low', 
            description: 'Un calzado nuevo con un atractivo de la vieja escuela: tus sueños retro se hicieron realidad. Este diseño reducido hace referencia al clásico AF1, luego se apoya en el estilo de los 80 con costuras retrospectivas y colores inspirados en la universidad. Sin embargo, no todo tiene que ser un retroceso: la comodidad y la durabilidad modernas los hacen fáciles de usar en cualquier momento y en cualquier lugar. Es hora de ponértelos e ir a donde quieras.', 
            image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/00b11c6b-7530-44c9-b712-ece6d77690a6/NIKE+FULL+FORCE+LO.png', 
            price: '95.000',
        },
    ];

    setProducts(fetchedProducts);
    setLoading(false);
};

fetchProducts();
}, []);

return (
<div>
    <Header />
    <Home />
    {loading ? <Loading /> : <Products products={products} />} {}
    <Footer />
</div>
);
}

export default App;