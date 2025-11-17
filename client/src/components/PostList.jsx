import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts }) => {
  if (!posts.length) {
    return (
      <div className="post-list__empty">
        <p>No posts yet. Create the first one!</p>
      </div>
    );
  }

  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostCard key={post._id || post.id} post={post} />
      ))}
    </section>
  );
};

export default PostList;

