import { createAction } from 'typesafe-actions';
import { getPostItList, postPostIt } from '../../lib/storage';

export const LIST = 'postIt/LIST';
export const ADD = 'postIt/ADD';

export const getList = createAction(LIST, getPostItList)();
export const addPostIt = createAction(ADD, postPostIt)();
