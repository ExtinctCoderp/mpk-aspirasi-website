import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  aspirasi: String,
  respon: [String],
  ps: {
    type: String,
    default: '' 
  }
}, {
  timestamps: true
});

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);