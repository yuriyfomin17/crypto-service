import mongoose from 'mongoose';
import cryptoMongoModel from '../cryptoMongoModel';


export default async function cryptoCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const name = req.body.name;
  const CHANGE24HOUR = req.body.CHANGE24HOUR;
  const OPEN24HOUR = req.body.OPEN24HOUR;
  const VOLUME24HOUR = req.body.VOLUME24HOUR;
  const VOLUME24HOURTO = req.body.VOLUME24HOURTO;
  const LOW24HOUR = req.body.LOW24HOUR;
  const HIGH24HOUR = req.body.HIGH24HOUR;
  const PRICE = req.body.PRICE;
  const SUPPLY = req.body.SUPPLY;
  const MKTCAP = req.body.MKTCAP;


  const crypto = new cryptoMongoModel({
    _id,
    name,
    CHANGE24HOUR,
    OPEN24HOUR,
    VOLUME24HOUR,
    VOLUME24HOURTO,
    LOW24HOUR,
    HIGH24HOUR,
    PRICE,
    SUPPLY,
    MKTCAP,
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



