import cryptoMongoModelModel from '../cryptoMongoModel';

const cryptoGetAll = (req, res) => {
  cryptoMongoModelModel.find()
    .select('-__v').exec()
    .then(docs => {
      res.status(200).json(docs);
    }).catch(err => {
    res.status(500).json(err);
  });

};

export default cryptoGetAll;


