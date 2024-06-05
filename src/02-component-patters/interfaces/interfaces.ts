import { Props as ProducButtonProps } from "../components/ProductsButtons";
import { Props as ProducImageProps } from "../components/ProductImage";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProducTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  title?: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHocProps {
  ({ children, product }: ProductCardProps): JSX.Element;

  Title: (Props: ProducTitleProps) => JSX.Element;

  Image: (Props: ProducImageProps) => JSX.Element;
  Buttons: (Props: ProducButtonProps) => JSX.Element;
}
