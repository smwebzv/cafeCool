import { SearchInputFrame } from "./SearchInputStyle";
import { ReactComponent as SearchIcon } from "../../assets/icon/SearchIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon/DeleteIcon.svg";

const SearchInput = () => {
    return(
        <SearchInputFrame>
            <SearchIcon />
            <DeleteIcon />
        </SearchInputFrame>
    );
}

export default SearchInput;