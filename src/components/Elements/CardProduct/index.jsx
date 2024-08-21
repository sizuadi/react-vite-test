import { truncateText } from "../../../utils/helper";
import Button from "../Button";

const CardProduct = ({ children }) => {
  return (
    <div className="w-1/3 border border-gray-200 rounded-lg shadow bg-gray-800 ">
      {children}
    </div>
  );
};

const Header = ({ imgURL }) => {
  return (
    <a href="#">
      <img
        src={imgURL}
        alt="product"
        className="p-5 object-cover h-72 w-full rounded-t-lg"
      />
    </a>
  );
};

const Body = ({ children, title }) => {
  return (
    <div className="px-5 pb-5">
      <h5 className="text-xl font-semibold tracking-tight text-white mb-2">
        {title}
      </h5>
      <p className="text-sm text-white text-justify">
        {truncateText(children)}
      </p>
    </div>
  );
};

const Footer = ({ price, id, handleAddToCart }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button variant="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
