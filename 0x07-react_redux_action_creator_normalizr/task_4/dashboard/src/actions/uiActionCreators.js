import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from "./courseActionTypes";

export function login(email, password){
  type: LOGIN,
  user:{
    email,
    password
  }
}
export function logout(){
  type: LOGOUT
}
export function displayNotificationDrawer(){
  type: DISPLAY_NOTIFICATION_DRAWER
}
export function hideNotificationDrawer(){
  type: HIDE_NOTIFICATION_DRAWER
}