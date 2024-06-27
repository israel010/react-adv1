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
  maxCount?: number;
}

export interface ProductCardHocProps {
  ({ children, product }: ProductCardProps): JSX.Element;

  Title: (Props: ProducTitleProps) => JSX.Element;

  Image: (Props: ProducImageProps) => JSX.Element;
  Buttons: (Props: ProducButtonProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}
export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
