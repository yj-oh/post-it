import { BoardState, BoardAction } from './types';
import { createReducer } from 'typesafe-actions';
import { LIST, ADD } from './actions';

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
	[ADD]: (state, action) => ({
		...state,
		activation: action.payload,
		result: action.payload.id.toString(),
	}),
});

export default board;
