import mongoose from 'mongoose';
import cryptoMongoModel from '../cryptoMongoModel';
// {
//   _id: mongoose.Schema.Types.ObjectId,
//     timestamps: { type: Date, required: true },
//   arrayInfo: { type: Array, required: true, },
// },
// fsyms: { type: String, required: true },
// tsyms: { type: String, required: true },
// CHANGE24HOUR: { type: String, required: true },
// OPEN24HOUR: { type: String, required: true },
// VOLUME24HOUR: { type: String, required: true },
// VOLUME24HOURTO: { type: String, required: true },
// LOW24HOUR: { type: String, required: true },
// HIGH24HOUR: { type: String, required: true },
// PRICE: { type: String, required: true },
// SUPPLY: { type: String, required: true },
// MKTCAP: { type: String, required: true },
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



