import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";

export const HomePage = ({ setSearch, search }) => {
  const localStorageProducts = localStorage.getItem("@PRODUCTLIST");
  const localStorageCart = localStorage.getItem("@CARTLIST");

  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(
    localStorageCart ? JSON.parse(localStorageCart) : []
  );
  const [visible, setVisible] = useState(false);

  async function getProductList() {
    try {
      const { data } = await api.get("products");
      setProductList(data);
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getProductList();
  }, []);

  useEffect(() => {
    localStorage.setItem("@PRODUCTLIST", JSON.stringify(productList));
  }, [productList]);

  useEffect(() => {
    localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
  }, [cartList]);

  function addProduct(product) {
    if (!cartList.some((cartProduct) => cartProduct.id === product.id)) {
      setCartList([...cartList, product]);
      toast.success("Produto adicionado com sucesso!");
    } else {
      toast.warning("Produto ja adicionado!");
    }
  }
  function removeCartProduct(productId) {
    const newCartList = cartList.filter(
      (cartProduct) => cartProduct.id !== productId
    );
    setCartList(newCartList);
    toast.success("Produto deletado com sucesso!");
  }

  function removeAllProducts(remove) {
    if (remove.length > 0) {
      const removeAll = cartList.filter(
        (cartProduct) => cartProduct === remove
      );
      setCartList(removeAll);
      toast.success("Todos os produtos foram removidos!");
    } else {
      toast.error("Nao possui nenhum item no carrinho!");
    }
  }

  return (
    <>
      <Header
        setProductList={setProductList}
        getProductList={getProductList}
        productList={productList}
        setVisible={setVisible}
        cartList={cartList}
      />
      <main>
        <ProductList productList={productList} addProduct={addProduct} />
        {visible ? (
          <CartModal
            cartList={cartList}
            setVisible={setVisible}
            removeCartProduct={removeCartProduct}
            removeAllProducts={removeAllProducts}
          />
        ) : null}
      </main>
    </>
  );
};
