// import mongoose, { Schema, model, models } from 'mongoose';

// // Define the type for a single comment
// export type IComment = {
//   user: string; // The username of the commenter
//   content: string; // The comment content
//   time: Date; // The time the comment was created
// };

// // Define the schema for comments
// const commentSchema = new Schema<IComment>({
//   user: { type: String, required: true },
//   content: { type: String, required: true },
//   time: { type: Date, required: true, default: () => new Date() },
// });

// // Define the type for a blog
// export type Blog = {
//   title: string; // The title of the blog
//   date: Date; // The publication date of the blog
//   slug: string; // The unique slug for the blog
//   description: string; // The blog description
//   image: string; // The URL of the blog image
//   image_alt: string; // The alternative text for the blog image
//   comments: IComment[]; // The list of comments on the blog
// };

// // Define the schema for blogs
// const blogSchema = new Schema<Blog>({
//   slug: { type: String, required: true, unique: true },
//   title: { type: String, required: true },
//   date: { type: Date, default: () => new Date() },
//   description: { type: String, required: true },
//   image: { type: String, required: true },
//   image_alt: { type: String, required: true },
//   comments: [commentSchema], // Embed the comments schema
// });

// // Define and export the Blog model
// const Blogimp = mongoose.models['blogs'] || mongoose.model<Blog>('blogs', blogSchema);

// export default BlogModel;





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
	    imageAlt: string; // alt for image
	    comments :IComment[];
};

// mongoose schema 
const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
        date: { type: Date, required: false, default: new Date()},
        description: { type: String, required: true },
		image: { type: String, required: true },
	    imageAlt: { type: String, required: true },
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
