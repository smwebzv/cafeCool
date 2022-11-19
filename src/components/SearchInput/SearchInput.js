import {
  PlusFrame,
  SearchInputFrame,
  ShiftAndInputFrame,
  ShiftEntry,
} from "./SearchInputStyle";
import { ReactComponent as SearchIcon } from "../../assets/icon/SearchIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon/DeleteIcon.svg";
import { ReactComponent as PlusIcon } from "../../assets/icon/PlusIcon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchInput = ({ name, route, hiddeAddButton }) => {
  let navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const changeScreen = (screen) => {
    navigate(screen);
  };

  const hovered = () => {
    setHover(!hover);
  };

  return (
    <ShiftAndInputFrame name={name}>
      <ShiftEntry>{name}</ShiftEntry>
      <SearchInputFrame hover={hover}>
        <form>
          <SearchIcon
            className="searchIcon"
            onClick={() => hovered()}
            hover={hover}
          />
          {hover && <input placeholder="Search" />}
        </form>
        {/* <DeleteIcon className="deleteIcon" /> */}
      </SearchInputFrame>
      {!hiddeAddButton && (
        <PlusFrame onClick={() => changeScreen(route)}>
          <PlusIcon />
        </PlusFrame>
      )}
    </ShiftAndInputFrame>
  );
};

export default SearchInput;
