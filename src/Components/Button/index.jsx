import { Container } from "./style";

const Button = ({
  children,
  blackSchema = false,
  handleClick,
  tipo,
  item,
  ...rest
}) => {
  return (
    <Container
      onClick={handleClick}
      blackSchema={blackSchema}
      type="button"
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;