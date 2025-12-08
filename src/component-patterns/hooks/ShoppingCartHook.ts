import { useState } from "react";
import { Product, ProductCart } from "../model";
import { onChangeArgs } from "../components/ProductCard";

export const useShoppingCart = () => {
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

    return { shoppingCart, onProductCountChange, getProductCount };
}