import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./uiActionTypes";

export function login(email, password){
  return {
    type: LOGIN,
    user:{email, password},
  }
}
export const boundLogin = (email, password) => dispatch(login(email, password));

export function loginSuccess(){
  return {
    type: LOGIN_SUCCESS
  }
}

export function loginFailure(){
  return {
    type: LOGIN_FAILURE
  }
}

export function logout(){
  type: LOGOUT
}
export const boudLogout = () => dispatch(logout());

export function displayNotificationDrawer(){
  type: DISPLAY_NOTIFICATION_DRAWER
}
export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

export function hideNotificationDrawer(){
  type: HIDE_NOTIFICATION_DRAWER
}
export const boundHideNotificationDrawe = () => dispatch(hideNotificationDrawer());

export function loginRequest(){
  return(dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:3000/login-success.json')
    .then((res) => res.json())
    .then((json) => dispatch(loginSuccess()))
    .catch((error) => dispatch(loginFailure()))
  }
}