import mongoose from 'mongoose';
import cryptoMongoModel from '../cryptoMongoModel';

export default async function cryptoCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const timestamps = new mongoose.Date()
  const fsyms = req.body.fsyms;
  const tsyms = req.body.tsyms;
  const arrayInfo = req.body.arrayInfo


  const crypto = new cryptoMongoModel({
    _id,
    fsyms,
    tsyms,

  });

  crypto.save().then(doc => {
    if (doc) {
      res.status(200).json('Crypto is saved');
    } else {
      res.status(404).json('No crypto for provided id');
    }
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });

}



