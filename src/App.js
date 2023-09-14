import React, { useState } from 'react';
import './App.css';
import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
	const [posts, setPosts] = useState([]);

	// TODO: Add the ability for the <PostCreate /> component to create new posts.
	// TODO: Add the ability for the <PostList /> component to delete an existing post.

const handleDeletePost = index => {
	const updatedPosts = posts.filter((post, i) => i !== index);
	setPosts(updatedPosts);
};

	return (
		<div className='App'>
			<PostCreate
				posts={posts}
				setPosts={setPosts}
			/>
			<PostList
				posts={posts}
				onDelete={handleDeletePost}
			/>
		</div>
	);
}

export default App;
