import mongoose from 'mongoose';

const emiSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    email: { type: String, required: true },
    total: [{
      amount: { type: Number, required: true },
      months: { type: Number, required: true },
      intrate: { type: Number, required: true },
      emitotal: { type: Number, required: true},
    }]
  },
  {
    timestamps: true,
  }
);

const emiInfo = mongoose.model('emiInfo', emiSchema);
export default emiInfo;