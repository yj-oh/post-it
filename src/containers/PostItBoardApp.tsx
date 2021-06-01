import React, { useEffect } from 'react';
import BoardList from '../components/board/BoardList';
import Board from '../components/board/Board';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Board as BoardType } from '../store/board';
import {
	addBoard,
	getActivation,
	getList as getBoardList,
	setActivation,
} from '../store/board';
import { getList as getPostItList } from '../store/postIt';

const Container = styled.div`
	display: flex;
	height: 100%;
`;

function PostItBoardApp() {
	const dispatch = useDispatch();
	const board = useSelector((state: RootState) => state.board);
	const postIt = useSelector((state: RootState) => state.postIt);

	useEffect(() => {
		dispatch(getBoardList());
		dispatch(getActivation());
	}, [dispatch]);

	useEffect(() => {
		const boardId = board.activation.id;
		if (boardId > 0) {
			dispatch(getPostItList(boardId));
		}
	}, [dispatch, board]);

	useEffect(() => {
		if (board.result) {
			dispatch(getBoardList());
		}
	}, [dispatch, board.result]);

	useEffect(() => {
		const boardId = board.activation.id;
		if (postIt.result && boardId > 0) {
			dispatch(getPostItList(boardId));
		}
	}, [dispatch, board.activation.id, postIt.result]);

	const onInsert = () => {
		dispatch(addBoard('새 보드'));
	};

	const onChangeActivation = (board: BoardType) => {
		dispatch(setActivation(board));
	};

	return (
		<Container>
			<BoardList
				list={board.list}
				activation={board.activation}
				onInsert={onInsert}
				onChangeActivation={onChangeActivation}
			/>
			<Board board={board.activation} postItList={postIt.list} />
		</Container>
	);
}

export default PostItBoardApp;
