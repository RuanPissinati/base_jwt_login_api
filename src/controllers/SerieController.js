const SerieModel = require('../models/serie.model');

exports.register = async (req, res, next) => {
   try {
      const data = await SerieModel.create(req.body);
      
      res.status(200).send({
         status: "succes",
         code: 200,
         data: data,
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
};

exports.getAllSeries = async (req, res, next) => {
   try {
      const data = await SerieModel.find({});
      
      res.status(200).send({
         status: "succes",
         code: 200,
         data: data,
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
};
exports.findOneSerie = async (req, res, next) => {
   try {
      const data = await SerieModel.findOne({_id: req.params.id});
      
      res.status(200).send({
         status: "succes",
         code: 200,
         data: data,
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
};


