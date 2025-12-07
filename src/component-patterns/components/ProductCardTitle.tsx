import { useContext } from "react";
import { context as productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export type props = {
    title?: string | null;
    className?: string;
}

export const ProductCardTitle = ({ title = null, className = '' }: props ) => {
    const { product } = useContext( productContext );
    const productTitle: string = !title ? product.title || 'Test Title' : title;

    return (
        <>
            <span className={`${styles.productDescription} ${className}`}>{ productTitle }</span>
        </>
    )
}
