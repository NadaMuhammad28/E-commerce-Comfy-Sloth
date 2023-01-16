import Loader from "../shared/Loade";
import { useProductsContext } from "../../context/ProductsContect";
const ProductsList = () => {
  const { isProductsLoading } = useProductsContext();
  if (isProductsLoading) return <Loader />;

  return <></>;
};

export default ProductsList;
