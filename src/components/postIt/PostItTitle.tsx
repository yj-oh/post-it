import React from 'react';
import { Field, FormikProps } from 'formik';
import { GoChevronDown, GoChevronUp, GoX } from 'react-icons/go';
import styled from 'styled-components';

const StyledField = styled(Field)`
	border: none;
	outline: solid 1px #7c7c7c;
`;
const Title = styled.div`
	background-color: #e2c000;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 7px;
	height: 2rem;

	.icon-area {
		display: flex;
		font-size: 1.2rem;
		cursor: pointer;
	}
`;

type PostItTitleProps = {
	edit: string | null;
	handleEdit: (target: string) => void;
	toggleOpen: () => void;
	handleRemove: () => void;
};
type ValuesProps = {
	title: string;
	content: string;
	isOpen: boolean;
};

function PostItTitle(props: PostItTitleProps & FormikProps<ValuesProps>) {
	const { edit, handleEdit, toggleOpen, handleRemove, values, handleSubmit } =
		props;

	return (
		<Title>
			{edit === 'title' ? (
				<StyledField
					name='title'
					placeholder={values.title}
					onBlur={handleSubmit}
					autoFocus
				/>
			) : (
				<div className='text-area' onClick={() => handleEdit('title')}>
					{values.title}
				</div>
			)}
			<div className='icon-area'>
				<span onClick={toggleOpen}>
					{values.isOpen ? <GoChevronUp /> : <GoChevronDown />}
				</span>
				<span onClick={handleRemove}>
					<GoX />
				</span>
			</div>
		</Title>
	);
}

export default PostItTitle;
