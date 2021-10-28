import { products } from "../../ArrayProducts/index";
import { Container, Product } from "./style";
import { CartContext } from "../../Providers/Cart/index";
import { useContext } from "react";
import Button from "../Button/index";
const Catalogue = ({ type }) => {
  const { cart, addProduct, removeProduct } = useContext(CartContext);

  const addCart = (item) => {
    addProduct(item);
  };
  const removeCart = (item) => {
    removeProduct(item);
  };

  return (
    <Container>
      {type === "catalogue" &&
        products.map((element, index) => (
          <Product key={index}>
            <img src={element.image} />
            <h3>{element.title}</h3>
            <p>R${element.price}</p>
            <Button item={element} handleClick={() => addCart(element)}>
              Add
            </Button>
          </Product>
        ))}

      {type === "cart" &&
        cart.map((element, index) => (
          <Product key={index}>
            <img src={element.image} />
            <h3>{element.title}</h3>
            <p>R${element.price}</p>
            <Button item={element} handleClick={() => removeCart(element)}>
              Remove
            </Button>
          </Product>
        ))}
    </Container>
  );
};
export default Catalogue;
