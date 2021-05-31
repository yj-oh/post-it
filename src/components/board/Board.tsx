import React from 'react';
import styled from 'styled-components';
import { Board as BoardType } from '../../store/board';
import BoardName from './BoardName';

const Container = styled.div`
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
};

function Board({ board }: BoardProps) {
	return (
		<Container>
			<BoardName board={board} />
		</Container>
	);
}

export default Board;
