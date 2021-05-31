import { combineReducers } from 'redux';
import board from './board';

const rootReducer = combineReducers({
	board,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
