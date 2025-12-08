import { ProductCard, ProductCardButtons, ProductCardImage, ProductCardTitle } from "../components"
import { Product } from "../model"
import '../styles/custom-styles.css';
import { useShoppingCart } from "../hooks/ShoppingCartHook";

const products: Product[] = [
    { id: '1', title: 'Coffee Mug - Card', img: './coffee-mug.png' },
    { id: '2', title: 'Coffe Mug - Meme', img: './coffee-mug2.png' },
]

export const ShoppingPage = () => {
    
    const { shoppingCart, onProductCountChange, getProductCount } = useShoppingCart();

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