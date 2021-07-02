export const AuthReducer = (state, action) => {
  // const UserList = state;

  let newRegUserList;
  let newUserDetail = {
    username: "",
    password: "",
  };

  switch (action.type) {
    case "LOGIN":
      // uName = action.username;

      return state;

    case "REGISTER":
      newUserDetail.username = action.userRegName;
      newUserDetail.password = action.userRegPass;
      // newRegUserList = action.UserList.concat(newUserDetail);
      newRegUserList = newUserDetail;
      return {
        UserList: newRegUserList,
      };

    default:
      return state;
  }
};
