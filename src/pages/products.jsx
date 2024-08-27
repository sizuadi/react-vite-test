import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Elements/CardProduct";
import { useEffect, useRef, useState } from "react";
import { currencyIDR } from "../utils/helper";
const products = [
  {
    id: 1,
    title: "Nike Ultra Plus Nuke 3",
    price: 100.0,
    description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui sapiente officiis. Architecto asperiores ipsam neque deleniti expedita repudiandae in labore commodi tempore reiciendis aperiam fugit, delectus quos nihil pariatur. Praesentium ullam suscipit fugiat dignissimos voluptatibus illo dolorem nulla pariatur ex consequatur, harum accusamus nam quasi, vel cumque sed laudantium!
    `,
    imgURL:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Adidas El-Mamamia Sneaker",
    price: 230.0,
    description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui sapiente officiis. Architecto asperiores ipsam neque deleniti expedita repudiandae in labore commodi tempore reiciendis aperiam fugit, delectus quos nihil pariatur. Praesentium ullam suscipit fugiat dignissimos voluptatibus illo dolorem nulla pariatur ex consequatur, harum accusamus nam quasi, vel cumque sed laudantium!
    `,
    imgURL:
      "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "El-madame Maklumat Sneaker",
    price: 270.0,
    description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui sapiente officiis. Architecto asperiores ipsam neque deleniti expedita repudiandae in labore commodi tempore reiciendis aperiam fugit, delectus quos nihil pariatur. Praesentium ullam suscipit fugiat dignissimos voluptatibus illo dolorem nulla pariatur ex consequatur, harum accusamus nam quasi, vel cumque sed laudantium!
    `,
    imgURL:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "El-madame Maklumat Sneaker",
    price: 270.0,
    description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui sapiente officiis. Architecto asperiores ipsam neque deleniti expedita repudiandae in labore commodi tempore reiciendis aperiam fugit, delectus quos nihil pariatur. Praesentium ullam suscipit fugiat dignissimos voluptatibus illo dolorem nulla pariatur ex consequatur, harum accusamus nam quasi, vel cumque sed laudantium!
    `,
    imgURL:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");

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
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
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
  }, [cart]);

  const totalPriceRef = useRef(null);

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button variant="bg-black ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5 gap-10">
        <div className="w-3/4 grid grid-cols-3 gap-2">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header imgURL={product.imgURL} />
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
              {cart.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td className="border border-slate-600 ">
                        {product.title}
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
