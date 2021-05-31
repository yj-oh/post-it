import { createAction } from 'typesafe-actions';
import { getBoardList, postBoard } from '../../lib/storage';

export const LIST = 'board/LIST';
export const ADD = 'board/ADD';

export const getList = createAction(LIST, getBoardList)();
export const addBoard = createAction(ADD, postBoard)();
