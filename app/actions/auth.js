import * as actionTypes from "./actionTypes";

const onLogin = data => {
  return {
    type: actionTypes.LOGIN,
    data
  };
};

export const authentication = (login, callback) => dispatch => {
  setTimeout(() => {
    let data = {
      success: login
    };
    dispatch(onLogin(data));
    if (typeof callback === "function") {
      callback({ success: true });
    }
  }, 500);
};

export const onLogout = (callback) => {
 ;
};

