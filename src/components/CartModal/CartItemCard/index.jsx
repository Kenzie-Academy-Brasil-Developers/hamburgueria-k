import { MdDelete } from "react-icons/md";
import style from "./style.module.scss";

export const CartItemCard = ({ product, removeCartProduct }) => {
  return (
    <li className={style.li}>
      <div className={style.infoProduct}>
        <div className={style.imgContainer}>
          <img className={style.img} src={product.img} alt={product.name} />
        </div>
        <h3 className={style.productName}>{product.name}</h3>
      </div>
      <button
        className={style.button}
        onClick={() => removeCartProduct(product.id)}
        aria-label="delete"
        title="Remover item"
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
