import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { postService } from '../services/api';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [submittingComment, setSubmittingComment] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await postService.getPost(postId);
        setPost(response.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Post not found');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentContent.trim()) return;

    setSubmittingComment(true);
    try {
      const response = await postService.addComment(postId, {
        content: commentContent,
        userId: null, // For now, we'll use null. In a real app, get from auth context
      });
      setPost(response.data);
      setCommentContent('');
    } catch (err) {
      console.error('Failed to add comment', err);
    } finally {
      setSubmittingComment(false);
    }
  };

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return (
      <div>
        <p className="status-text">{error}</p>
        <Link className="btn-primary" to="/">
          Back to posts
        </Link>
      </div>
    );
  }

  return (
    <article className="post-details">
      <Link className="btn-link" to="/">
        ← Back to posts
      </Link>
      <h1 className="post-details__title">{post.title}</h1>
      <div className="post-details__meta">
        <span>{post.author?.name || 'Unknown author'}</span>
        <span>{post.category?.name || 'General'}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="post-details__content">{post.content}</div>

      <div className="comments-section">
        <h3 className="comments-section__title">
          Comments ({post.comments?.length || 0})
        </h3>

        <form className="comment-form" onSubmit={handleAddComment}>
          <textarea
            className="comment-form__input"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            placeholder="Write a comment..."
            rows="3"
            required
          />
          <button
            type="submit"
            className="btn-primary"
            disabled={submittingComment || !commentContent.trim()}
          >
            {submittingComment ? 'Posting...' : 'Post Comment'}
          </button>
        </form>

        <div className="comments-list">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((comment, index) => (
              <div key={index} className="comment">
                <div className="comment__header">
                  <span className="comment__author">
                    {comment.user?.name || 'Anonymous'}
                  </span>
                  <span className="comment__date">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="comment__content">{comment.content}</div>
              </div>
            ))
          ) : (
            <p className="comments-list__empty">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostDetails;

