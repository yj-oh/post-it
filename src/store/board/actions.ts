import { createAction } from 'typesafe-actions';
import {
	getBoardList,
	postBoard,
	getActivationBoard,
	postActivationBoard,
} from '../../lib/storage';

export const LIST = 'board/LIST';
export const ADD = 'board/ADD';
export const GET_ACTIVATION = 'board/GET_ACTIVATION';
export const SET_ACTIVATION = 'board/SET_ACTIVATION';

export const getList = createAction(LIST, getBoardList)();
export const addBoard = createAction(ADD, postBoard)();
export const getActivation = createAction(GET_ACTIVATION, getActivationBoard)();
export const setActivation = createAction(
	SET_ACTIVATION,
	postActivationBoard,
)();
