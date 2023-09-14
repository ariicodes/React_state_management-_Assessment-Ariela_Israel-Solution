import React from 'react';
import Post from './Post';

/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({ posts, onDelete }) {
	// TODO: Diplay the list of posts.
	// TODO: Create at least one additional component that is used by this component.
	// TODO: Each post must have className="post" for the tests to work.
	// TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

	const list = posts.map((post, i) => (
		<li key={i}>
			<Post
				type={post.type}
				content={post.content}
				deleteBtnHandler={() => onDelete(i)}
			/>
		</li>
	));

	return (
		<div className='post-list'>
			<ul style={{listStyle: 'none', padding: '0'}}>{list}</ul>
		</div>
	);
}

export default PostList;
