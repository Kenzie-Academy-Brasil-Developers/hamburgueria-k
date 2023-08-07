import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import { toast } from "react-toastify";
import style from "./style.module.scss";
export const Header = ({
  getProductList,
  productList,
  cartList,
  setVisible,
  setProductList,
}) => {
  const [value, setValue] = useState("");

  function searchProduct() {
    event.preventDefault();

    const valueLower = value.toLowerCase();
    const filter = productList.filter((product) =>
      product.name.toLowerCase().includes(valueLower)
    );

    if (filter.length > 0) {
      setProductList(filter);
      if (value === "") {
        getProductList();
      }
    } else {
      toast.warning("Nenhum produto encontrado.");
      getProductList();
      setValue("");
    }
  }

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerContainer}>
          <img className={style.logoImg} src={Logo} alt="Logo Kenzie Burguer" />
          <div className={style.inputContainer}>
            <button className={style.cart} onClick={() => setVisible(true)}>
              <MdShoppingCart size={27} />
              <span>{cartList.length}</span>
            </button>
            <form className={style.form}>
              <input
                className={style.input}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Digitar pesquisa"
              />
              <button
                className={style.buttonSearch}
                onClick={() => searchProduct()}
                type="submit"
              >
                <MdSearch size={21} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
