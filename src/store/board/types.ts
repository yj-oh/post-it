import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type BoardAction = ActionType<typeof actions>;

export type Board = {
	id: number;
	name: string;
};

export type BoardState = {
	list: Board[];
	result: string | null;
};
