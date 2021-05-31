import React from 'react';
import styled from 'styled-components';
import { Board as BoardType } from '../store/board';

const Container = styled.div`
	width: calc(100% - 200px);
`;

type BoardProps = {
	board: BoardType;
};

function Board({ board }: BoardProps) {
	return (
		<Container>
			<h1>{board.name}</h1>
		</Container>
	);
}

export default Board;
