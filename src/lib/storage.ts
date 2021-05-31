import { Board } from '../store/board';

const BOARD_ITEM_NAME = 'boardList';

// 보드 목록 조회
export function getBoardList() {
	const strBoardList = localStorage.getItem(BOARD_ITEM_NAME);
	return strBoardList ? JSON.parse(strBoardList) : [];
}

// 보드 단 건 저장
export function postBoard(name: string): Board {
	const boardList = getBoardList();
	const length = boardList.length;

	const id = length > 0 ? boardList[length - 1].id + 1 : 1;

	const newBoard = { id: id, name: name };

	localStorage.setItem(
		BOARD_ITEM_NAME,
		JSON.stringify([...boardList, newBoard]),
	);

	return newBoard;
}

// 활성 보드 조회
export function getActivationBoard(): Board {
	const strActivation = localStorage.getItem('activation');
	return strActivation ? JSON.parse(strActivation) : { id: 0, name: '' };
}

// 활성 보드 변경
export function postActivationBoard(board: Board) {
	localStorage.setItem('activation', JSON.stringify(board));
	return board;
}
