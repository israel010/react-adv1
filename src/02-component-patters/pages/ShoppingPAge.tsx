import { ProductCard } from "../components";
import "../styles/custom-styles.css";
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
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image />
          <ProductCard.Title title={"cafe"} className="title" />
          <ProductCard.Buttons className="custom-btn" />
        </ProductCard>
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image />
          <ProductCard.Title title={"cafe"} className="title" />
          <ProductCard.Buttons className="custom-btn" />
        </ProductCard>
        <ProductCard
          product={product}
          style={{
            backgroundColor: "red",
          }}
        >
          <ProductCard.Image
            style={{
              boxShadow: "0px 4px 20px black",
            }}
          />
          <ProductCard.Title
            style={{
              fontWeight: "bold",
              color: "white",
            }}
          />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
}
