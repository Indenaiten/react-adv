import { P } from "react-router/dist/development/instrumentation-BB0wRuqz"
import { ProductCard, ProductCardButtons, ProductCardImage, ProductCardTitle } from "../components"
import { Product } from "../model"
import '../styles/custom-styles.css';

const products: Product[] = [
    { id: '1', title: 'Coffee Mug', img: './coffee-mug.png' },
    { id: '2', title: 'Test' },
    { id: '3', title: 'Test' },
    { id: '4', title: 'Test' },
    { id: '5', title: 'Test' },
    { id: '6', title: 'Test' },
    { id: '7', title: 'Test' },
    { id: '8', title: 'Test' },
]

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                <ProductCard product={products[0]}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={products[0]} className="bg-dark">
                    <ProductCardImage />
                    <ProductCardTitle className="text-white" />
                    <ProductCardButtons />
                </ProductCard>
            </div>
        </div>
    )
}