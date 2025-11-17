import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <article className="post-card">
      <div className="post-card__header">
        <h3>
          <Link to={`/posts/${post._id || post.id}`}>{post.title}</Link>
        </h3>
        {post.category && (
          <span className="post-card__category">
            {typeof post.category === 'string' ? post.category : post.category?.name}
          </span>
        )}
      </div>
      <p className="post-card__excerpt">{post.excerpt || post.content?.slice(0, 120)}</p>
      <div className="post-card__meta">
        <span>{post.author?.name || post.author || 'Unknown author'}</span>
        <span>
          {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'Today'}
        </span>
      </div>
    </article>
  );
};

export default PostCard;

