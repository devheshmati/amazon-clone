export const SALogin = (obj) => {
  return { type: "SA_LOGIN", payload: { status: obj.status } };
};

export const SALogout = () => {
  return { type: "SA_LOGOUT" };
};

export const AddCategory = (obj) => {
  return {
    type: "ADD_CATEGORY",
    payload: { value: obj },
  };
};

export const DeleteCategory = (obj) => {
  return { type: "ADD_CATEGORY", payload: { index: obj.index } };
};
