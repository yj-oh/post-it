import { BoardState, BoardAction } from './types';
import { createReducer } from 'typesafe-actions';
import { LIST } from './actions';

const initialState: BoardState = {
	list: [],
	result: null,
};

const board = createReducer<BoardState, BoardAction>(initialState, {
	[LIST]: (state, { payload }) => ({
		...state,
		list: payload,
		result: null,
	}),
});

export default board;
