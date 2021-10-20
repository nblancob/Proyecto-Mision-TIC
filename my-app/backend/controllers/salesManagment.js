const SalesManagment = require('../models/salesManagment');
console.log("is run salesManagment");

exports.getSales = (req, res) => {
    SalesManagment.find().then((postResult) => {
        res.status(200).json(postResult);
    });
  };