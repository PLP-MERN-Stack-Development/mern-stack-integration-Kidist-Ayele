import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostList from '../components/PostList';
import usePosts from '../hooks/usePosts';

const Home = () => {
  const { posts, loading, error, pagination, fetchPosts } = usePosts();
  const [searchQuery, setSearchQuery] = useState('');
  const currentPage = pagination.page || 1;

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPosts(1, searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    fetchPosts(1, '');
  };

  const handlePageChange = (page) => {
    fetchPosts(page, searchQuery);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section>
      <div className="section-header">
        <div>
          <h2>Recent Posts</h2>
          <p>Posts coming directly from the Express API.</p>
        </div>
        <Link className="btn-secondary" to="/create">
          Write a Post
        </Link>
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search posts..."
        />
        <button type="submit" className="btn-primary">
          Search
        </button>
        {searchQuery && (
          <button
            type="button"
            className="btn-link"
            onClick={handleClearSearch}
          >
            Clear
          </button>
        )}
      </form>

      {loading && <p>Loading posts...</p>}
      {error && <p className="status-text">{error}</p>}
      {!loading && !error && <PostList posts={posts} />}

      {!loading && !error && !searchQuery && pagination.total > 0 && (
        <div className="pagination">
          <button
            className="btn-secondary"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            Previous
          </button>
          <span className="pagination__info">
            Page {currentPage} of {pagination.pages} ({pagination.total} total posts)
          </span>
          <button
            className="btn-secondary"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= pagination.pages}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Home;

