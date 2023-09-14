import React from 'react';

function Post({ type, content, deleteBtnHandler }) {
	return (
		<div
			className='post'
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			{type === 'Text' ? (
				<p>{content}</p>
			) : (
				<img
					alt=''
					src={content}
					style={{ margin: '15px 0' }}
				/>
			)}
			<button
				name='delete'
				onClick={deleteBtnHandler}
			>
				Delete
			</button>
		</div>
	);
}

export default Post;
