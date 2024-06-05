import { ProductCardHocProps } from "../interfaces/interfaces";
import { ProductCard as ProductCardHoc } from "./ProductCard";

import { ProductImage } from "./ProductImage";

import { ProductTitle } from "./ProductTitle";

import { ProductButtons } from "./ProductsButtons";
export { ProductImage } from "./ProductImage";

export { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductsButtons";

export const ProductCard: ProductCardHocProps = Object.assign(ProductCardHoc, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
