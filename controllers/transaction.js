const Transaction = require('../models/Transaction');

// get all courses
exports.all = (req, res) => {
    Transaction.find()
    .then(transactions => res.status(200).json(transactions))
    .catch(err => res.status(400).json({error: err.message}));
};

// get a course by id
exports.get = (req, res, next) => {
    Transaction.findOne({ _id: req.params.id })
      .then(transaction => res.status(200).json(transaction))
      .catch(error => res.status(404).json({ error }));
  };

  // store a new course
exports.create = (req, res, next) => {
  const transaction = new Transaction({
    ...req.body
  });
  transaction.save()
    .then(() => res.status(201).json({ message: 'Transaction created  !'}))
    .catch(error => res.status(400).json({ error }));
};

// update a course by id
exports.update = (req, res, next) => {
  Transaction.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'transaction updated !'}))
    .catch(error => res.status(400).json({ error }));
};

// delete a course by id
exports.delete = (req, res, next) => {
    Transaction.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Transaction deleted !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.somme = (req, res, next) => {
  Transaction.aggregate({$group:{_id:"$type",montant:{$sum:"$montant"}}})
  .then((transaction) => res.status(200).json(transaction))
  .catch(error => res.status(400).json({ error }));
};