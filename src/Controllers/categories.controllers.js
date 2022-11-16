//Import Services
const CategoryServices = require('../Services/categories.services');

//Get All Categories
const getAllCategories = async (req, res, next) => {
  try {
    const result = await CategoryServices.getAll();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

//Create Category
const createCategory = async (req, res, next) => {
  try {
    const newCategory = req.body
    const result = await CategoryServices.createCategory(newCategory);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({
      messages: '<-!!!Check Information - Something Wrong!!!->',
      error: err.message,
    })
  }
};

//Delete Category
const deleteCategory = async (req, res, next) => {

  try {
    const { category } = req;

    await CategoryServices.deleteCategory(category);
    res.status(200).json({
      status: 'success',
      message: '<-!CATEGORY DELETED!->',
    });
  } catch (err) {
    console.log(err);
  }

  // try {
  //   const newCategory = req.body
  //   const result = await CategoryServices.createCategory(newCategory);
  //   res.status(201).json(result);
  // } catch (err) {
  //   res.status(400).json({
  //     messages: '<-!!!Check Information - Something Wrong!!!->',
  //     error: err.message,
  //   })
  // }
};

module.exports = { createCategory, getAllCategories, deleteCategory }