import { createAction } from 'typesafe-actions';
import { getBoardList } from '../../lib/storage';

export const LIST = 'board/LIST';

export const getList = createAction(LIST, getBoardList)();
