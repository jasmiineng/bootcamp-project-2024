
import mongoose, { Schema } from "mongoose";

// TypeScript type for a comment
export type IComment = {
    user: string;
    content: string;
    time: Date;
};

// Comment Schema
const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    content: { type: String, required: true },
    time: { type: Date, required: true, default: () => new Date() }
});

// TypeScript type for a project
export type Project = {
    title: string;
    slug: string;
    description: string; // for preview
    image: string; // URL for the image in public
    imageAlt: string; // alt text for the image
    comments: IComment[];
};

// Project Schema
const projectSchema = new Schema<Project>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    comments: { type: [commentSchema], default: [] }
});

// Define the collection and model
const ProjectModel = mongoose.models['projects'] || mongoose.model('projects', projectSchema);

export default ProjectModel;
