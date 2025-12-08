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

            <ProductCard product={ product }>
                <ProductCardImage />
                <ProductCardTitle style={{ display: 'flex', justifyContent: 'center' }}/>
                <ProductCardButtons style={{ display: 'flex', justifyContent: 'center' }}/>
            </ProductCard>
        </div>
    )
}