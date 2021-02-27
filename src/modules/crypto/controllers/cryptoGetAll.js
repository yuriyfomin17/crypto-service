import cryptoModel from '../cryptoMongoModel';

export default function cryptoGetAll(req, res) {
  cryptoModel.find().select("")
    .exec()
    .then(docs => {
      return res.status(200).json(docs);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};




