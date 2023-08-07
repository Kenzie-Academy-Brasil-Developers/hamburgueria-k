import style from "./style.module.scss";

export const ProductCard = ({ product, addProduct }) => {
  return (
    <li className={style.li}>
      <div className={style.divImg}>
        <img className={style.img} src={product.img} alt={product.name} />
      </div>
      <div className={style.liContent}>
        <h3>{product.name}</h3>
        <span className={style.category}>{product.category}</span>
        <span className={style.price}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className={style.button} onClick={() => addProduct(product)}>
          Adicionar
        </button>
      </div>
    </li>
  );
};
