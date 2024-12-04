import { selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('Course Action Creators', () => {
  test('selectCourse should return the correct action object', () => {
    const index = 1;
    const action = selectCourse(index);
    expect(action).toEqual({
      type: SELECT_COURSE,
      index
    });
  });

  test('unSelectCourse should return the correct action object', () => {
    const index = 1;
    const action = unSelectCourse(index);
    expect(action).toEqual({
      type: UNSELECT_COURSE,
      index
    });
  });
});
