import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} children={title} />;
};

export default Button;
