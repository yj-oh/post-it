import React from 'react';
import { Board } from '../../store/board';

type BoardItemProps = {
	board: Board;
	activationId: number;
	onChangeActivation: (board: Board) => void;
};

function BoardItem({
	board,
	activationId,
	onChangeActivation,
}: BoardItemProps) {
	const handleChangeActivation = () => {
		if (activationId === board.id) {
			return;
		}
		onChangeActivation(board);
	};

	return (
		<li
			className={activationId === board.id ? 'active' : ''}
			onClick={handleChangeActivation}
		>
			# {board.name}
		</li>
	);
}

export default BoardItem;
