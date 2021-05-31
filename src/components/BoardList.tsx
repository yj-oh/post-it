import React from 'react';
import { GoPlus } from 'react-icons/all';
import styled from 'styled-components';
import { Board } from '../store/board';
import BoardItem from './BoardItem';

const Container = styled.div`
	width: 200px;
	height: 100%;
	background-color: #e2e2e2;
	cursor: default;

	h3 {
		padding: 1rem;
		border-bottom: solid 1px #d2d2d2;
	}
	ul {
		height: calc(100% - 49px);
		overflow-y: auto;
	}
	li {
		padding: 0.5rem 1.5rem;
		width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	li.active {
		background-color: #bfbfbf;
	}
	li.add-board {
		text-align: center;
	}
	li:not(.active):hover {
		background-color: #181818;
		color: #ffffff;
		cursor: pointer;
	}
`;

type BoardListProps = {
	list: Board[];
	activation: Board;
	onInsert: () => void;
	onChangeActivation: (board: Board) => void;
};

function BoardList({
	list,
	activation,
	onInsert,
	onChangeActivation,
}: BoardListProps) {
	const handleInsert = () => {
		onInsert();
	};

	return (
		<Container>
			<h3>📒 Online Post-it</h3>
			<ul>
				{list.map((item: Board) => (
					<BoardItem
						key={item.id}
						board={item}
						activationId={activation.id}
						onChangeActivation={onChangeActivation}
					/>
				))}
				<li className='add-board' onClick={handleInsert}>
					<GoPlus />
				</li>
			</ul>
		</Container>
	);
}

export default BoardList;
