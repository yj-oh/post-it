import { BoardState, BoardAction } from './types';
import { createReducer } from 'typesafe-actions';
import { LIST, ADD, GET_ACTIVATION, SET_ACTIVATION, MODIFY } from './actions';

const initialState: BoardState = {
	list: [],
	activation: { id: 0, name: '' },
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
	[MODIFY]: (state, action) => ({
		...state,
		activation: action.payload,
		result: action.payload.id.toString(),
	}),
	[GET_ACTIVATION]: (state, action) => ({
		...state,
		activation: action.payload,
	}),
	[SET_ACTIVATION]: (state, action) => ({
		...state,
		activation: action.payload,
	}),
});

export default board;
