import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const ButtonDisabled = ({ title, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} children={title} />;
};

export default ButtonDisabled;
