import { useContext } from "react";
import { context as productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export type props = {
    img?: string;
    className?: string;
}

export const ProductCardImage = ({ img = '', className }: props) => {
    const { product } = useContext( productContext );
    const image: string = !img ? product.img || '' : img;

    return (
        <>
            <img className={`${styles.productImg} ${className}`} src={ image ? image : noImage } alt={ image ? 'Product image' : 'Image not found' }/>
        </>
    )
}
