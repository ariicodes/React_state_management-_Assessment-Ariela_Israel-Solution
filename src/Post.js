import React from 'react';

function Post({ type, content, deleteBtnHandler }) {
	return (
		<div className='post'>
			{type === 'Text' ? (
				<p>{content}</p>
			) : (
				<img
					alt=''
					src={content}
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
