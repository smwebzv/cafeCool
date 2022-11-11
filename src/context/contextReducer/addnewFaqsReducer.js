const AddNewFaqsReducer = (state, { type, payload }) => {
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
  }
};

export default AddNewFaqsReducer;
