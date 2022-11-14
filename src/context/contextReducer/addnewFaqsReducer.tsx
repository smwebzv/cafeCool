const AddNewFaqsReducer = (state:any, { type, payload }:any) => {
  switch (type) {
    case "addNewFaqs":
      return {
        ...state,
        faqsList: payload,
      };
    case "addNewItemFaqs":
      return {
        ...state,
        faqsList: [...state.faqsList, payload],
      };
      default:
        return state;
  }
};

export default AddNewFaqsReducer;
