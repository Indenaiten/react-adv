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
                <ProductCard product={products[0]} style={{ backgroundColor: '#70D1F8' }}>
                    <ProductCard.Image style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}/>
                    <ProductCard.Title style={{ fontWeight: 'bold' }}/>
                    <ProductCard.Buttons style={{display: 'flex', justifyContent: 'end'}} />
                </ProductCard>

                <ProductCard product={products[0]} className="bg-dark">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-white text-bold"/>
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={products[0]} className="bg-dark">
                    <ProductCardImage className="custom-image"/>
                    <ProductCardTitle className="text-white text-bold" />
                    <ProductCardButtons className="custom-buttons" />
                </ProductCard>
            </div>
        </div>
    )
}