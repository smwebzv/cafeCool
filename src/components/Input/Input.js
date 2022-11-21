import { Inputs } from "./InputStyle";
const Input = ({ placeholder, type, name, onChange }) => {
  return (
    <Inputs>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
      />
    </Inputs>
  );
};

export default Input;
