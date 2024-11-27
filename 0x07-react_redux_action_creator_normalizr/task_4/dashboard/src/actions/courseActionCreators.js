import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export function selectCourse(index){
  type: SELECT_COURSE
  index
}

export function unSelectCourse(index){
  type: UNSELECT_COURSE
  index
}