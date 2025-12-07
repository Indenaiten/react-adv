import { P } from "react-router/dist/development/instrumentation-BB0wRuqz"
import { ProductCard, ProductCardImage, ProductCardTitle, ProductCardButtons } from "../components"
import { Product } from "../model"

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
                { 
                    products.map( product => ( 
                        <ProductCard key={product.id} product={product}>
                            <ProductCardImage />
                            <ProductCardTitle />
                            <ProductCardButtons />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}