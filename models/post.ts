import { Schema, model, models } from "mongoose";

// Interface
export interface IPost {
  creatorId: string;
  title: string;
  description: string;
  images: string[]; // Array of images in base64 format
  createdAt: Date;
}

// Schema
const postSchema = new Schema<IPost>({
  creatorId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [String],
  createdAt: Date,
});

// Model
const Post = models.Post || model<IPost>("Post", postSchema);

export default Post;
