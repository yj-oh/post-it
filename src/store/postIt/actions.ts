import { createAction } from 'typesafe-actions';
import { getPostItList, postPostIt, putPostIt } from '../../lib/storage';

export const LIST = 'postIt/LIST';
export const ADD = 'postIt/ADD';
export const MODIFY = 'postIt/MODIFY';

export const getList = createAction(LIST, getPostItList)();
export const addPostIt = createAction(ADD, postPostIt)();
export const modifyPostIt = createAction(MODIFY, putPostIt)();
