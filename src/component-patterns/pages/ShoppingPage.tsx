import { JSX } from "react";
import { ProductCard, ProductCardButtons, ProductCardImage, ProductCardTitle } from "../components"
import { Product } from "../model"
import '../styles/custom-styles.css';

const products: Product[] = [
    { id: '1', title: 'Coffee Mug - Card', img: './coffee-mug.png' },
    { id: '2', title: 'Coffe Mug - Meme', img: './coffee-mug2.png' },
]

const product: Product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <ProductCard product={ product } initialValues={{ count: 4, minCount: 3, maxCount: 10 }}>
                {
                    ( message ): JSX.Element => (
                        <>
                            <ProductCardImage />
                            <ProductCardTitle style={{ display: 'flex', justifyContent: 'center' }}/>
                            <ProductCardButtons style={{ display: 'flex', justifyContent: 'center' }}/>
                            <h1>{message}</h1>
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}