import { PostItState, PostItAction } from './types';
import { createReducer } from 'typesafe-actions';
import { LIST, ADD, MODIFY, REMOVE } from './actions';

const initialState: PostItState = {
	list: [],
	result: null,
};

const postIt = createReducer<PostItState, PostItAction>(initialState, {
	[LIST]: (state, { payload }) => ({
		...state,
		list: payload,
		result: null,
	}),
	[ADD]: (state, action) => ({
		...state,
		result: action.payload.id.toString(),
	}),
	[MODIFY]: (state, action) => ({
		...state,
		result: action.payload.id.toString(),
	}),
	[REMOVE]: (state, action) => ({
		...state,
		result: action.payload.toString(),
	}),
});

export default postIt;
