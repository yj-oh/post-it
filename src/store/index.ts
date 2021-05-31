import { combineReducers } from 'redux';
import board from './board';
import postIt from './postIt';

const rootReducer = combineReducers({
	board,
	postIt,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
