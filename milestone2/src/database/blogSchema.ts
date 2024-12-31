import mongoose, { Schema } from "mongoose";

export type IComment = {
	user: string;
	content: string;
	time: Date;
}
const commentSchema = new Schema<IComment>({
    user: {type: String, required: true},
    content: {type: String, required: true},
    time: { type: Date, required: true, default: new Date()}
})

// typescript type (can also be an interface)
export type Blog = {
		title: string;
        date: Date;
	    slug: string; 
		description: string; // for preview
	  image: string; // url for string in public
	  image_alt: string; // alt for image
	  comments :IComment[];
};

// mongoose schema 
const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
        date: { type: Date, required: false, default: new Date()},
        description: { type: String, required: true },
		image: { type: String, required: true },
	    image_alt: { type: String, required: true },
		slug: { type: String, required: true },
		comments: [commentSchema],

})

// defining the collection and model
const Blogimp = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default Blogimp;



/*
import mongoose, { Schema, Document, Model } from "mongoose";


// TypeScript interface for a comment
interface IComment {
  username: string;
  text: string;
  date: Date;
}


// TypeScript interface for a blog
export interface IBlog extends Document {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
  comments: IComment[]; // Array of comments
}


// Mongoose schema for the blog
const blogSchema: Schema = new Schema<IBlog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: () => new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  comments: {
    type: [
      {
        username: { type: String, required: true },
        text: { type: String, required: true },
        date: { type: Date, default: () => new Date() },
      },
    ],
    default: [],
  },
});

// Collection and model
const Blog: Model<IBlog> =
  mongoose.models["blogs"] || mongoose.model<IBlog>("blogs", blogSchema);

export default Blog;
*/
