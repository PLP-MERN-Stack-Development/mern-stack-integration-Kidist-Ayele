import React, { useState, useEffect } from 'react';

const PostForm = ({ onSubmit, initialValues = {}, categories = [] }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: '',
    isPublished: false,
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      ...initialValues,
    }));
  }, [initialValues]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows="6"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="author">Author ID</label>
        <input
          id="author"
          name="author"
          type="text"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <small>Use an existing user ID (we will add a selector later)</small>
      </div>

      <div className="form-control">
        <label htmlFor="category">
          Category {categories.length === 0 && <span>(enter ID manually)</span>}
        </label>
        {categories.length > 0 ? (
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category._id || category.id} value={category._id || category.id}>
                {category.name}
              </option>
            ))}
          </select>
        ) : (
          <input
            id="category"
            name="category"
            type="text"
            value={formData.category}
            onChange={handleChange}
            required
          />
        )}
      </div>

      <div className="form-control form-control--inline">
        <input
          id="isPublished"
          name="isPublished"
          type="checkbox"
          checked={formData.isPublished}
          onChange={handleChange}
        />
        <label htmlFor="isPublished">Publish immediately</label>
      </div>

      <button type="submit" className="btn-primary">
        Save Post
      </button>
    </form>
  );
};

export default PostForm;

