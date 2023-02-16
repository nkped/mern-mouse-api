import mongoose from 'mongoose'

const Schema = mongoose.Schema



const postSchema = Schema({
    title:  {
        type: String,
        required: true,
      },published: {
        type: Boolean,
        default: false,
      },
      author: {
        type: String,
        required: true,
      },
      content: String,
      tags: [String],
      
      
}, { timestamps: true }) //Use timestamp!!


const Post = mongoose.model('post', postSchema);

export default Post


/*

INERTED:
{ timestamps: true }

..AND REMOVED:
createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
*/