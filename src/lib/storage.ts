const BOARD_ITEM_NAME = 'boardList';

// 보드 목록 조회
export function getBoardList() {
	const strBoardList = localStorage.getItem(BOARD_ITEM_NAME);
	return strBoardList ? JSON.parse(strBoardList) : [];
}
