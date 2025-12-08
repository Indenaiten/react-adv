import { JSX } from "react";
import { ProductCard, ProductCardButtons, ProductCardImage, ProductCardTitle } from "../components"
import { Product, ProductCardHandlers } from "../model"
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

            <ProductCard product={ product } initialValues={{ count: 4, minCount: 4, maxCount: 10 }}>
                {
                    ({ count, isMaxCountReached, maxCount, product, increment, decrement, reset }: ProductCardHandlers): JSX.Element => (
                        <>
                            <ProductCardImage />
                            <ProductCardTitle style={{ display: 'flex', justifyContent: 'center' }}/>
                            <ProductCardButtons style={{ display: 'flex', justifyContent: 'center' }}/>
                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increment(2)}>+2</button>
                            <span>{count}</span>
                            <button onClick={() => decrement(2)}>-2</button>
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}