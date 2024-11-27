import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from "./courseActionTypes";

export function login(email, password){
  return {
    type: LOGIN,
    user:{email, password},
  }
}
export const boundLogin = (email, password) => dispatch(login(email, password));

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