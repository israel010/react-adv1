import {
  ProductButtons,
  ProductImage,
  ProductCard,
  ProductTitle,
} from "../components";

export default function ShoppingPage() {
  const product = {
    id: "1",
    title: "Coffee",
    img: "./coffee-mug.png",
  };
  return (
    <div>
      <h1>Shooping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {/* <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard> */}

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"cafe"} />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
}
