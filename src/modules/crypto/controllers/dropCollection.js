import cryptoModel from '../cryptoMongoModel';

export default async function cryptoGetAll(req, res) {
  cryptoModel.remove()
    .exec()
    .then(doc => {
      res.status(200).json('deleted');

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

