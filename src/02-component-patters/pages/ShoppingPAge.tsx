import { ProductCard } from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export default function ShoppingPage() {
  return (
    <div>
      <h1>Shooping Store</h1>
      <hr />

      <ProductCard
        product={product}
        className="bg-dark"
        initialValues={{
          count: 4,
          // maxCount: 10,
        }}
      >
        {({ reset, isMaxCountReached, count, increaseBy }) => (
          <>
            <ProductCard.Image img={product.img} />
            <ProductCard.Title className="title" />
            <ProductCard.Buttons className="custom-btn" />

            <button onClick={reset}>reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {/* si no se llega al inMaxReached,oucultar */}
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <br />
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
}
