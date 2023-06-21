export const SALogin = (obj) => {
  return { type: "SA_LOGIN", payload: { status: obj.status } };
};

export const SALogout = () => {
  return { type: "SA_LOGOUT" };
};
