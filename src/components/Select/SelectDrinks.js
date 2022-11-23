import {
  DropDownContainer,
  SelectDiv,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./SelectDrinksStyle";

const SelectDrinks = ({
  products,
  toggling,
  clickOption,
  dropDownIndex,
  item1,
  indx1,
}) => {
  return (
    <DropDownContainer>
      <SelectDiv
        index={indx1}
        dropDownIndex={dropDownIndex}
        onClick={() => toggling(indx1)}
        name="drinkId"
      >
        {item1?.drinkId || "Izaberi proizvod"}
      </SelectDiv>
      {dropDownIndex == indx1 && (
        <DropDownListContainer>
          {products.map((item, indx) => (
            <DropDownList value={item.name} key={item.id}>
              <ListItem onClick={() => clickOption(indx1, item.name)}>
                {item.name}
              </ListItem>
            </DropDownList>
          ))}
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default SelectDrinks;
