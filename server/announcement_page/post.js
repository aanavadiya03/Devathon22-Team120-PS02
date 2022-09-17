import mongoose from 'mongoose';

const pageSchema = mongoose.Schema({
  title: String,
  selectedFile: String,
  announcement: String,
  admin: String,
  club: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var Announcement = mongoose.model('Announcement', pageSchema);
export default Announcement;
