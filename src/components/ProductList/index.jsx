import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";
export const ProductList = ({ productList, addProduct }) => {
  return (
    <section className={style.section}>
      <div className="container">
        <ul className={style.ul}>
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
