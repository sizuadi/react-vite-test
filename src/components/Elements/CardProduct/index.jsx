import { currencyIDR, truncateText } from "../../../utils/helper";
import Button from "../Button";

const CardProduct = ({ children }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow bg-gray-800">
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
        className="p-1 object-cover h-72 w-full rounded-t-lg"
      />
    </a>
  );
};

const Body = ({ children, title }) => {
  return (
    <div className="px-5 pb-5">
      <h5 className="text-lg font-semibold tracking-tight text-white mb-2">
        {title}
      </h5>
      <p className="text-xs text-white text-justify">
        {truncateText(children)}
      </p>
    </div>
  );
};

const Footer = ({ price, id, handleAddToCart }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{currencyIDR(price)}</span>
      <Button
        variant="bg-blue-600 !text-sm !px-3"
        onClick={() => handleAddToCart(id)}
      >
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
