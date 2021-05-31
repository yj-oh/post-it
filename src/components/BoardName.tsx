import React, { useState } from 'react';
import { Form, Formik, Field } from 'formik';
import { Board, modifyBoard } from '../store/board';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

const common = css`
	width: 100%;
	height: 30px;
	line-height: 30px;
	font-size: 20px;
	font-weight: bold;
`;
const StyledField = styled(Field)`
	${common};
	border: none;
	outline: solid 1px #7c7c7c;
`;
const TextHeader = styled.div`
	${common};
`;

type BoardProps = {
	board: Board;
};

function BoardName({ board }: BoardProps) {
	const dispatch = useDispatch();

	const [isEditing, setIsEditing] = useState(false);
	const { id, name } = board;

	const toggleEditable = () => {
		setIsEditing(!isEditing);
	};

	const handleSubmit = (values: { name: string }) => {
		if (values.name.trim() && name !== values.name) {
			dispatch(modifyBoard({ id: id, name: values.name }));
		}
		toggleEditable();
	};

	return (
		<Formik
			enableReinitialize
			initialValues={{ name: name }}
			onSubmit={(values, { resetForm }) => {
				handleSubmit(values);
				resetForm({});
			}}
		>
			{({ handleSubmit }) => (
				<Form>
					{isEditing ? (
						<StyledField
							name='name'
							placeholder={name}
							onBlur={handleSubmit}
							autoFocus
						/>
					) : (
						<TextHeader onClick={toggleEditable}>
							<p>{name}</p>
						</TextHeader>
					)}
				</Form>
			)}
		</Formik>
	);
}

export default BoardName;
