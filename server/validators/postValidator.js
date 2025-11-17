const Joi = require('joi');
const mongoose = require('mongoose');

const objectIdValidator = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error('any.invalid');
  }
  return value;
};

const basePostSchema = {
  title: Joi.string().trim().max(100).required(),
  content: Joi.string().trim().required(),
  featuredImage: Joi.string().uri().optional(),
  excerpt: Joi.string().trim().max(200).allow('', null),
  author: Joi.string().custom(objectIdValidator, 'ObjectId validation').required(),
  category: Joi.string()
    .custom(objectIdValidator, 'ObjectId validation')
    .required(),
  tags: Joi.array().items(Joi.string().trim().max(30)).default([]),
  isPublished: Joi.boolean().default(false),
};

const createPostSchema = Joi.object(basePostSchema);

const updatePostSchema = Joi.object({
  ...basePostSchema,
}).min(1);

module.exports = {
  createPostSchema,
  updatePostSchema,
};

