import { useEffect } from "react";
import { MdClose, MdOutlineAddLocationAlt } from "react-icons/md";
import { useKeyDown } from "../../hooks/useKeyDown";
import { useOutClick } from "../../hooks/useOutClick";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss";
export const CartModal = ({
  cartList,
  removeCartProduct,
  setVisible,
  removeAllProducts,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + Number(product.price);
  }, 0);

  const ref = useOutClick(() => {
    setVisible(false);
  });
  function useKeyDown() {
    useEffect(() => {
      function handleKeyDown(event) {
        if (event.keyCode === 27) {
          setVisible(false);
        }
      }

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [setVisible]);
  }

  return (
    <div className={style.dialog} role="dialog">
      <div ref={ref} useKeyDown={useKeyDown} className={style.modal}>
        <div className={style.modalHeader}>
          <h2>Carrinho de compras</h2>
          <button
            aria-label="close"
            title="Fechar"
            onClick={() => setVisible(false)}
          >
            <MdClose size={21} />
          </button>
        </div>
        <div className={style.ulContainer}>
          <ul className={style.ul}>
            {cartList.length > 0 ? (
              cartList.map((product) => (
                <CartItemCard
                  key={product.id}
                  product={product}
                  removeCartProduct={removeCartProduct}
                />
              ))
            ) : (
              <p>Nenhum item adicionado ao carrinho.</p>
            )}
          </ul>
        </div>
        <div className={style.linegrayContainer}>
          <div className={style.linegray}></div>
        </div>
        <div className={style.modalFooter}>
          <div className={style.total}>
            <span>Total</span>
            <span className={style.totalValue}>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button
            className={style.button}
            onClick={() => removeAllProducts(cartList)}
          >
            Remover todos
          </button>
        </div>
      </div>
    </div>
  );
};
