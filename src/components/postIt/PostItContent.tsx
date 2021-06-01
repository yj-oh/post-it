import React from 'react';
import { Field, FormikProps } from 'formik';
import styled from 'styled-components';

const StyledField = styled(Field)`
	height: 100%;
	border: none;
	outline: solid 1px #7c7c7c;
`;
const Content = styled.div`
	background-color: #f8d300;

	padding: 7px;
	height: calc(100% - 2rem);

	p {
		height: 100%;
		overflow-y: auto;
		word-break: break-all;
	}
`;

type PostItTitleProps = {
	edit: string | null;
	handleEdit: (target: string) => void;
};
type ValuesProps = {
	title: string;
	content: string;
	isOpen: boolean;
};

function PostItContent(props: PostItTitleProps & FormikProps<ValuesProps>) {
	const { edit, handleEdit, values, handleSubmit } = props;

	return (
		<Content>
			{edit === 'content' ? (
				<StyledField
					name='content'
					component='textarea'
					placeholder={values.content}
					onBlur={handleSubmit}
					autoFocus
				/>
			) : (
				<p onClick={() => handleEdit('content')}>{values.content}</p>
			)}
		</Content>
	);
}

export default PostItContent;
