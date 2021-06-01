import { Board } from '../store/board';
import { PostIt } from '../store/postIt';

const BOARD_ITEM_NAME = 'boardList';
const POST_IT_ITEM_NAME = 'postItList';

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
	postActivationBoard(newBoard);

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

// 보드 수정
export function patchBoard(board: Board) {
	const boardList = getBoardList();

	const newBoardList = boardList.map((item: Board) =>
		item.id === board.id ? { ...item, name: board.name } : item,
	);
	localStorage.setItem(BOARD_ITEM_NAME, JSON.stringify(newBoardList));
	postActivationBoard(board);

	return board;
}

// 포스트잇 전체 목록 조회
function getPostItListAll(): PostIt[] {
	const strList = localStorage.getItem(POST_IT_ITEM_NAME);
	return strList ? JSON.parse(strList) : [];
}

// 포스트잇 목록 조회
export function getPostItList(boardId: number): PostIt[] {
	const postItList = getPostItListAll();

	return postItList.filter((postIt: PostIt) => postIt.boardId === boardId);
}

// 포스트잇 단 건 저장
export function postPostIt(postIt: PostIt): PostIt {
	const postItList = getPostItListAll();
	const length = postItList.length;

	postIt.id = length > 0 ? postItList[length - 1].id + 1 : 1;

	localStorage.setItem(
		POST_IT_ITEM_NAME,
		JSON.stringify([...postItList, postIt]),
	);
	return postIt;
}

// 포스트잇 수정
export function putPostIt(postIt: PostIt): PostIt {
	const postItList = getPostItListAll();

	const newList = postItList.map((item: PostIt) =>
		item.id === postIt.id ? { ...postIt } : item,
	);
	localStorage.setItem(POST_IT_ITEM_NAME, JSON.stringify(newList));

	return postIt;
}

// 포스트잇 삭제
export function deletePostIt(id: number): number {
	const postItList = getPostItListAll();

	const removeIndex = postItList
		.map(function (item: PostIt) {
			return item.id;
		})
		.indexOf(id);
	postItList.splice(removeIndex, 1);
	localStorage.setItem(POST_IT_ITEM_NAME, JSON.stringify(postItList));

	return id;
}
