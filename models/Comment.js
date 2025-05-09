import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  aspirasi: String,
  respon: [String]
}, {
  timestamps: true
});

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
