import { ProductCard } from "../components";
import { product, products } from "../data/products";
import useShoppingCart from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";
export default function ShoppingPage() {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            className="bg-dark"
            onChange={onProductCountChange}
            value={shoppingCart[p.id]?.count || 0}
          >
            <ProductCard.Image img={p.img} />
            <ProductCard.Title className="title" />
            <ProductCard.Buttons className="custom-btn" />
          </ProductCard>
        ))}
      </div>

      {/* Productos flotantes  */}

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, value]) => (
          <ProductCard
            key={key}
            product={value}
            className="bg-dark"
            style={{
              width: "100px",
            }}
            value={value.count}
            onChange={onProductCountChange}
          >
            <ProductCard.Image img={value.img} />
            <ProductCard.Title className="title" />
            <ProductCard.Buttons className="custom-btn" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
}
