import { HolderButton } from "./ButtonStyle";
const Button = ({ name, onClick }) => {
  return (
    <HolderButton name={name} onClick={onClick}>
      {name}
    </HolderButton>
  );
};

export default Button;
