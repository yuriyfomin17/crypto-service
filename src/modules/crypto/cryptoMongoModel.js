import mongoose from 'mongoose';

const cryptoSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    CHANGE24HOUR: { type: String, required: true },
    OPEN24HOUR:{ type: String, required: true },
    VOLUME24HOUR:{ type: String, required: true },
    VOLUME24HOURTO:{ type: String, required: true },
    LOW24HOUR:{type: String, required: true},
    HIGH24HOUR:{type: String, required: true},
    PRICE:{type: String, required: true},
    SUPPLY:{type: String, required: true},
    MKTCAP:{type: String, required: true}



  },
  { timestamps: {} },
);



export default mongoose.model('Crypto', cryptoSchema);
