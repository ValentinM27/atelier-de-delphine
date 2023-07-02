import { Schema, model, models } from "mongoose";
import { z } from "zod";

// Interface
export interface IPost {
  _id?: string;
  creatorId: string;
  title: string;
  description: string;
  images?: string[]; // Array of images in base64 format
  createdAt?: Date;
}

// Schema
const postSchema = new Schema<IPost>({
  creatorId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [String],
  createdAt: Date,
});

// Zod object
export const postSchemaValidation = z.object({
  creatorId: z.string(),
  title: z.string(),
  description: z.string(),
  images: z.array(z.string()).optional(),
  createdAt: z.date().optional(),
});

// Model
const Post = models.Post || model<IPost>("Post", postSchema);

export default Post;
