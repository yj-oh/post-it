import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Board as BoardType } from '../../store/board';
import { addPostIt, PostIt as PostItType } from '../../store/postIt';
import BoardName from './BoardName';
import PostItItem from '../postIt/PostItItem';
import { useDispatch } from 'react-redux';

const Container = styled.div`
	position: relative;
	padding: 1rem;
	width: calc(100% - 200px);
	background-color: #ffffff;
	background-image: linear-gradient(
			rgba(210, 210, 210, 0.5) 0.5px,
			transparent 0.5px
		),
		linear-gradient(to right, rgba(210, 210, 210, 0.5) 0.5px, #ffffff 0.5px);
	background-size: 10px 10px;
`;

type BoardProps = {
	board: BoardType;
	postItList: PostItType[];
};

function Board({ board, postItList }: BoardProps) {
	const dispatch = useDispatch();

	const addNewPostIt = useCallback(
		(x: number = 100, y: number = 100) => {
			if (board.id < 1) return;

			const newPostIt = {
				id: 0,
				boardId: board.id,
				title: '새 포스트잇',
				content: '',
				position: { x: x, y: y },
				size: { width: 200, height: 200 },
				isOpen: true,
				zIndex: 1,
			};
			dispatch(addPostIt(newPostIt));
		},
		[dispatch, board.id],
	);

	useEffect(() => {
		function onKeyDown(e: KeyboardEvent) {
			if ((e.ctrlKey || e.metaKey) && e.altKey && e.code === 'KeyN') {
				addNewPostIt();
			}
		}
		document.addEventListener('keydown', onKeyDown);
	}, [addNewPostIt]);

	function onDoubleClick(e: React.MouseEvent<HTMLDivElement>) {
		const { pageX: x, pageY: y } = e;
		const clientRect = e.currentTarget.getBoundingClientRect();

		addNewPostIt(x - clientRect.left, y);
	}

	return (
		<Container onDoubleClick={onDoubleClick}>
			<BoardName board={board} />
			{postItList.length > 0 &&
				postItList.map((postIt: PostItType) => (
					<PostItItem key={postIt.id} postIt={postIt} />
				))}
		</Container>
	);
}

export default Board;
