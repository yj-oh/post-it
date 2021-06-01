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

const Container = styled.div`
	display: flex;
	height: 100%;
`;

function PostItBoardApp() {
	const dispatch = useDispatch();
	const board = useSelector((state: RootState) => state.board);

	useEffect(() => {
		dispatch(getBoardList());
		dispatch(getActivation());
	}, [dispatch]);

	useEffect(() => {
		if (board.result) {
			dispatch(getBoardList());
		}
	}, [dispatch, board.result]);

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
			<Board board={board.activation} />
		</Container>
	);
}

export default PostItBoardApp;
