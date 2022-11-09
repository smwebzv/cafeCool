const AddNewFaqsReducer = (state, { type, payload }) => {
  switch (type) {
    case "addNewFaqs":
      return {
        ...state,
        newFaqs: payload,
      };
  }
};

export default AddNewFaqsReducer;
