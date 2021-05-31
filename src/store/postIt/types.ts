import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type PostItAction = ActionType<typeof actions>;

export type PostIt = {
	id: number;
	boardId: number;
	title: string;
	content: string;
	position: { x: number; y: number };
	size: { width: number; height: number };
	isOpen: boolean;
	zIndex: number;
};

export type PostItState = {
	list: PostIt[];
	result: string | null;
};
