const express = require('express');
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  addComment,
} = require('../controllers/postController');
const validateRequest = require('../middleware/validateRequest');
const {
  createPostSchema,
  updatePostSchema,
} = require('../validators/postValidator');

const router = express.Router();

router
  .route('/')
  .get(getPosts)
  .post(validateRequest(createPostSchema), createPost);
router
  .route('/:idOrSlug')
  .get(getPost)
  .put(validateRequest(updatePostSchema), updatePost)
  .delete(deletePost);

router.post('/:idOrSlug/comments', addComment);

module.exports = router;

