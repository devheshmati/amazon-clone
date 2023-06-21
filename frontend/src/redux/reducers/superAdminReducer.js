const initialState = {
  superAdminStatus: false,
};

const superAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SA_LOGIN":
      return (state = { superAdminStatus: action.payload.status });
    case "SA_LOGOUT":
      return (state = { superAdminStatus: false });
    default:
      return state;
  }
};

export default superAdminReducer;
