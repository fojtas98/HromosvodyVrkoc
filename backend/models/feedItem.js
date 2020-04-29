import { Schema, model } from "mongoose";

const feedItemSchema = new Schema(
  {
    title: String,
    description: String,
    url: String,
  },
  {
    timestamps: true,
  }
);

export default model("FeedItem", feedItemSchema);
