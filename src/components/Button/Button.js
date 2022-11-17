import { HolderButton } from "./ButtonStyle";
const Button = ({ name, onClick, style }) => {
  return (
    <HolderButton name={name} onClick={onClick} className={style}>
      {name}
    </HolderButton>
  );
};

export default Button;
