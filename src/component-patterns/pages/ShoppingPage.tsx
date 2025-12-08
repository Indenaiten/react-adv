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
        setShoppingCart( prev => {
            const productInCart: ProductCart = shoppingCart[ product.id ] || { ...product, count: 0 };

            if( Math.max( productInCart.count + count, 0 ) > 0 ){
                productInCart.count += count;
                return { ...shoppingCart, [ product.id ]: productInCart}
            }

            const { [ product.id ]: toRemove, ...rest } = shoppingCart;
            return rest;
        });
    }

    const getProductCount = ( product: Product ) => shoppingCart[ product.id ]?.count || 0;

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                {
                    products.map( product => (
                        <ProductCard key={ product.id } product={ product } count={ getProductCount( product )} onChange={ onProductCountChange }>
                            <ProductCardImage />
                            <ProductCardTitle style={{ display: 'flex', justifyContent: 'center' }}/>
                            <ProductCardButtons style={{ display: 'flex', justifyContent: 'center' }}/>
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shoping-cart">
                {
                    Object.entries( shoppingCart ).map( ( [ key, product ] ) => (
                        <ProductCard key={key} product={ product } count={ product.count } onChange={ onProductCountChange } style={{ width: '175px' }}>
                            <ProductCardImage />
                            <ProductCardTitle/>
                            <ProductCardButtons style={{ display: 'flex', justifyContent: 'center' }}/>
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}