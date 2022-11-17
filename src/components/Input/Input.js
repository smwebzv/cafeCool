import { Inputs } from "./InputStyle";
const Input = ({ placeHolder, type, name, onChange }) => {
  return (
    <Inputs>
      <input
        placeHolder={placeHolder}
        type={type}
        name={name}
        onChange={onChange}
      />
    </Inputs>
  );
};

export default Input;
