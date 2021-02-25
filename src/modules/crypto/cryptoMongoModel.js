import mongoose from 'mongoose';

const cryptoSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    timestamps: { type: Date, required: true },
    arrayInfo: { type: Array, required: true, },
  },
);


export default mongoose.model('Crypto', cryptoSchema);
