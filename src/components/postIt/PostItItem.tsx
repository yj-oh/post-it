import React, { useState } from 'react';
import {
	modifyPostIt,
	PostIt as PostItType,
	removePostIt,
} from '../../store/postIt';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import PostItTitle from './PostItTitle';
import PostItContent from './PostItContent';

const Container = styled.div<PostItStyleProps>`
	position: absolute;
	left: ${(props) => props.position?.x + 'px'};
	top: ${(props) => props.position?.y + 'px'};
	width: ${(props) => props.size?.width + 'px'};
	height: ${(props) => props.size?.height + 'px'};

	> form {
		height: 100%;
	}
`;

type PostItProps = {
	postIt: PostItType;
};
type PostItStyleProps = {
	size: {
		width: number;
		height: number;
	};
	position: {
		x: number;
		y: number;
	};
};

function PostItItem({ postIt }: PostItProps) {
	const dispatch = useDispatch();

	const { title, content, size, position, isOpen } = postIt;
	const [edit, setEdit] = useState('');

	const handleEdit = (target: string) => {
		setEdit(target);
	};

	const toggleOpen = () => {
		postIt.isOpen = !postIt.isOpen;
		onSubmit();
	};

	const handleSubmit = (values: { title: string; content: string }) => {
		postIt.title = values.title.trim();
		postIt.content = values.content;
		onSubmit();
	};

	const onSubmit = () => {
		dispatch(modifyPostIt(postIt));
		handleEdit('');
	};

	const handleRemove = () => {
		if (postIt.content) {
			if (!window.confirm('정말 삭제하시겠습니까?')) {
				return;
			}
		}
		dispatch(removePostIt(postIt.id));
	};

	return (
		<Container size={size} position={position}>
			<Formik
				enableReinitialize
				initialValues={{
					title: title,
					content: content,
					isOpen: isOpen,
				}}
				onSubmit={(values, { resetForm }) => {
					handleSubmit(values);
					resetForm({});
				}}
			>
				{(formikProps) => (
					<Form>
						<PostItTitle
							edit={edit}
							handleEdit={handleEdit}
							toggleOpen={toggleOpen}
							handleRemove={handleRemove}
							{...formikProps}
						/>
						{isOpen && (
							<PostItContent
								edit={edit}
								handleEdit={handleEdit}
								{...formikProps}
							/>
						)}
					</Form>
				)}
			</Formik>
		</Container>
	);
}

export default PostItItem;
