import Colors from "../products/singleProduct/colors";
import Quantity from "../products/singleProduct/productQuantity";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
const AddtoCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const [clrIndex, setClrIndex] = useState(0);
  const [amount, setAmount] = useState(1);
  const increaseAmount = () => {
    if (amount < product.stock) {
      setAmount(amount + 1);
    }
  };
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const addedProduct = {
    id: product.id,
    color: product.colors[clrIndex],
    idColor: `${product.id}${product.colors[clrIndex]}`,
    name: product.name,
    image: product.images[0].url,
    amount,
    price: product.price,
    subtotal: product.price * amount,
    stock: product.stock,
    category: product.category,
    shipping: product.shipping,
  };
  return (
    <div className=" d-flex-col single-add-to-cart-wrapper">
      <Colors
        colors={product.colors}
        setClrIndex={setClrIndex}
        clrIndex={clrIndex}
      />

      <Quantity
        amount={amount}
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
      />
      <Link
        onClick={() => addToCart(addedProduct)}
        className="btn single-adtocart-btn"
      >
        Add to cart
      </Link>
    </div>
  );
};

export default AddtoCart;
