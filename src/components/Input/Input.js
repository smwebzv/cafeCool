import { Inputs } from "./InputStyle";
const Input = ({ placeHolder, type, name }) => {
  return (
    <Inputs>
      <input placeHolder={placeHolder} type={type} name={name} />
    </Inputs>
  );
};

export default Input;
