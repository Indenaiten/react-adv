import { ProductCard as ProductCardHOC, props as ProductCardProps } from './ProductCard';
import { ProductCardImage } from './ProductCardImage';
import { ProductCardTitle } from './ProductCardTitle';
import { ProductCardButtons } from './ProductCardButtons';
import { JSX } from 'react';

export { ProductCardImage, ProductCardTitle, ProductCardButtons };

export type props = {
    ({ product, children }: ProductCardProps): JSX.Element,
    Image: typeof ProductCardImage,
    Title: typeof ProductCardTitle,
    Buttons: typeof ProductCardButtons,
}

export const ProductCard: props = Object.assign( ProductCardHOC, {
    Image: ProductCardImage,
    Title: ProductCardTitle,
    Buttons: ProductCardButtons,
});

export default ProductCard;