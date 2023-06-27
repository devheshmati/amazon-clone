const initialState = { items: [] };

const categories = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return { items: [...state.items, action.payload.value] };
    case "SWAP_CATEGORY":
      return { items: action.payload.value };
    case "DELETE_CATEGORY":
      return {
        items: state.items.filter((item, i) => i !== action.payload.value),
      };

    default:
      return state;
  }
};

export default categories;
