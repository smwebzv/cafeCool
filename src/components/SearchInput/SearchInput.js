import { PlusFrame, SearchInputFrame } from "./SearchInputStyle";
import { ReactComponent as SearchIcon } from "../../assets/icon/SearchIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon/DeleteIcon.svg";
import { ReactComponent as PlusIcon } from "../../assets/icon/PlusIcon.svg";

const SearchInput = () => {
    return(
        <>
        <SearchInputFrame>
            <SearchIcon />
            <DeleteIcon />
        </SearchInputFrame>
        <PlusFrame>
            <PlusIcon />
        </PlusFrame>
        </>
    );
}

export default SearchInput;