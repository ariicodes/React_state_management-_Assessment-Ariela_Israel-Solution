import React from 'react';

function Post({ type, content }) {
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
			<button name='delete'>Delete</button>
		</div>
	);
}

export default Post;
