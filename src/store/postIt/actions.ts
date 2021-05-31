import { createAction } from 'typesafe-actions';
import { getPostItList } from '../../lib/storage';

export const LIST = 'postIt/LIST';

export const getList = createAction(LIST, getPostItList)();
