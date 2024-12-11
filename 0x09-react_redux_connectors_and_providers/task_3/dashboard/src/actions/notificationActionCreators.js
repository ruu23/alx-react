import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export function markAsAread(index){
  type: MARK_AS_READ,
  index
}
export const boundMarkAsAread = (index) => dispach(markAsAread(index));

export function setNotificationFilter(filter){
  type: SET_TYPE_FILTER,
  filter
}
export const boundSetNotificationFilter = (filter) => dispatchsetNotificationFilter(filter);