import { P } from "react-router/dist/development/instrumentation-BB0wRuqz"
import { ProductCard, ProductCardButtons, ProductCardImage, ProductCardTitle } from "../components"
import { Product } from "../model"
import '../styles/custom-styles.css';
import { useState } from "react";
import { onChangeArgs } from "../components/ProductCard";

const products: Product[] = [
    { id: '1', title: 'Coffee Mug - Card', img: './coffee-mug.png' },
    { id: '2', title: 'Coffe Mug - Meme', img: './coffee-mug2.png' },
]

interface ProductCart extends Product{
    count: number;
}

export const ShoppingPage = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [ key: string ]: ProductCart }>({});

    const onProductCountChange = ({ product, count }: onChangeArgs ) => {
        const newShoppingCart = { ...shoppingCart, [ product.id ]: { ...product, count }};
        if( count === 0 ) delete newShoppingCart[ product.id ];
        setShoppingCart({ ...newShoppingCart });
        console.log( JSON.stringify( newShoppingCart ));
    }

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                {
                    products.map( product => (
                        <ProductCard key={ product.id } product={ product } onChange={ onProductCountChange }>
                            <ProductCardImage />
                            <ProductCardTitle />
                            <ProductCardButtons />
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shoping-cart">
                <ProductCard product={ products[0] } style={{ width: '175px' }}>
                    <ProductCardImage />
                    <ProductCardTitle />
                    <ProductCardButtons />
                </ProductCard>

                <ProductCard product={ products[1] } style={{ width: '175px' }}>
                    <ProductCardImage />
                    <ProductCardButtons />
                </ProductCard>
            </div>

            <div>
                <code>
                    { JSON.stringify( shoppingCart ) }
                </code>
            </div>
        </div>
    )
}