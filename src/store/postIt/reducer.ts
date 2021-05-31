import { PostItState, PostItAction } from './types';
import { createReducer } from 'typesafe-actions';
import { LIST } from './actions';

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
});

export default postIt;
