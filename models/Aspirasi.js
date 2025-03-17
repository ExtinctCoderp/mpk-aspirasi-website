import mongoose from 'mongoose';

const AspirasiSchema = new mongoose.Schema({
  aspirasi: { 
    type: String, 
    required: true 
  },
  tipe_aspirasi: { 
    type: String, 
    required: true 
  }
}, {
  timestamps: true
});

export default mongoose.models.Aspirasi || mongoose.model('Aspirasi', AspirasiSchema);