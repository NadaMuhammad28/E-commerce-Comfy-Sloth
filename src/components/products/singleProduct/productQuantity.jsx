import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useCartContext } from "../../../context/CartContext";
const ProductAmount = ({ amount, increaseAmount, decreaseAmount }) => {
  return (
    <div>
      <button onClick={decreaseAmount}>
        <AiOutlineMinusCircle />
      </button>
      <h2> {amount}</h2>
      <button onClick={increaseAmount}>
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
};

export default ProductAmount;
