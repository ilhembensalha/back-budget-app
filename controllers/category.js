const Category = require('../models/Category');

// get all courses
exports.all = (req, res) => {
    Category.find()
    .then(categories => res.status(200).json(categories))
    .catch(err => res.status(400).json({error: err.message}));
};

// get a course by id
exports.get = (req, res, next) => {
    Category.findOne({ _id: req.params.id })
      .then(category => res.status(200).json(category))
      .catch(error => res.status(404).json({ error }));
  };

  // store a new course
exports.create = (req, res, next) => {
  const category = new Category({
    ...req.body
  });
  category.save()
    .then(() => res.status(201).json({ message: 'Category created  !'}))
    .catch(error => res.status(400).json({ error }));
};

// update a course by id
exports.update = (req, res, next) => {
    Category.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Category updated !'}))
    .catch(error => res.status(400).json({ error }));
};

// delete a course by id
exports.delete = (req, res, next) => {
    Category.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Category deleted !'}))
    .catch(error => res.status(400).json({ error }));
};