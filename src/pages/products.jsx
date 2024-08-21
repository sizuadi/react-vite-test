import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Elements/CardProduct";
import { useState } from "react";
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

  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    navigate("/login");
  };

  const handleAddToCart = (id) => {
    setCart([
      ...cart,
      {
        id: id,
        qty: 1,
      },
    ]);
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button variant="bg-black ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
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
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{item.qty}</td>
                    <td>{product.price * item.qty}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
