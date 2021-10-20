const SalesManagment = require('../models/salesManagment');
console.log("is run salesManagment");

exports.getSales = (req, res) => {
    SalesManagment.find().then((saleResult) => {
        res.status(200).json(saleResult);
    });
};

exports.addSales = (req,res) => {
    const salesAdd = new SalesManagment({
        id_product: req.body.id_product,
        seller: req.body.seller,
        description : req.body.description,
        amount: req.body.amount,
        price: req.body.price,
        total: req.body.total,
    });

    salesAdd.save().then((createdSale) => {
        console.log(createdSale);
        res.status(201).json("Created succesfully");
    }); 

};

exports.getSaleId = (req, res) => {
    SalesManagment.findById(req.params.id).then((saleResult) =>{
        if(saleResult){
            res.status(200).json(saleResult);
        }else{
            res.status(404).json("la id:" + req.params.id + " no se encontro");
        }
    });
};