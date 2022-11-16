const express = require("express");

//Import Controllers
const {
  getAllCategories,
  createCategory,
  deleteCategory } = require('../Controllers/categories.controllers');

const categoryRouter = express.Router();

//To get All Categories
categoryRouter.get('/', getAllCategories);

//To create Category ->(POST)
categoryRouter.post('/', createCategory);

//To delete Category ->(DELETE)
categoryRouter.delete('/:id', deleteCategory);


module.exports = categoryRouter;