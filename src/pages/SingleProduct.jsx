import { useParams } from "react-router";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  return <h1> profuct {id} </h1>;
};

export default SingleProduct;
