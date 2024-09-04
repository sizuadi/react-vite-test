import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Elements/CardProduct";
import { useEffect, useRef, useState } from "react";
import { currencyIDR, getUsername, truncateTitle } from "../utils/helper";
import { getProducts } from "../services/product.service";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  const handleAddToCart = (id) => {
    if (cart.length > 0 && cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      if (cart.length > 0) {
        setCart([...cart, { id, qty: 1 }]);
      } else {
        setCart([{ id, qty: 1 }]);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return
    }
    setUsername(getUsername(token));
  }, [navigate])


  useEffect(() => {
    getProducts((products) => {
      setProducts(products);
    })
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  useEffect(() => {
    if (cart.length > 0 && products.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {username}
        <Button variant="bg-black ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5 gap-10">
        <div className="w-3/4 grid grid-cols-3 gap-2">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header imgURL={product.image} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                  price={product.price}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <table className="text-left table-auto border-collapse border border-slate-500">
            <thead>
              <tr>
                <th className="border border-slate-600 ">Product</th>
                <th className="px-2 border border-slate-600 ">Price</th>
                <th className="px-2 border border-slate-600 ">Quantity</th>
                <th className="border border-slate-600 ">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && cart.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td className="border border-slate-600 ">
                        {truncateTitle(product.title)}
                      </td>
                      <td className="px-2 border border-slate-600">
                        {currencyIDR(product.price)}
                      </td>
                      <td className="px-2 border border-slate-600">
                        {item.qty}
                      </td>
                      <td className="border border-slate-600 ">
                        {currencyIDR(product.price * item.qty)}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td className="border border-slate-600" colSpan={3}>
                  Total
                </td>
                <td className="border border-slate-600">
                  {currencyIDR(totalPrice)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
