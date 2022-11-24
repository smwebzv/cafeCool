import {
  SelectDivDeliverer,
  DropDownListContainerDeliverer,
  DropDownListDeliverer,
  ListItemDeliverer,
} from "./SelectDelivererStyle";
const SelectDeliverer = ({
  deliverers,
  dropDownDostavljac,
  places,
  dropDownDostavljaca,
  changeDeliverer,
}) => {
  return (
    <SelectDivDeliverer
      onClick={() => dropDownDostavljac()}
      className="selectItems"
      dropDownDostavljaca={dropDownDostavljaca}
    >
      {places?.place ? places.place : "Izaberi proizvod..."}
      {dropDownDostavljaca && (
        <DropDownListContainerDeliverer>
          {deliverers.map((item) => (
            <DropDownListDeliverer key={item.id}>
              <ListItemDeliverer
                onClick={() => changeDeliverer("place", item.name)}
              >
                {item.name}
              </ListItemDeliverer>
            </DropDownListDeliverer>
          ))}
        </DropDownListContainerDeliverer>
      )}
    </SelectDivDeliverer>
  );
};

export default SelectDeliverer;
