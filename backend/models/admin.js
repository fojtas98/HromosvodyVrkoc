import { Schema, model } from "mongoose";

const adminSchema = new Schema(
  {
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export default model("Admin", adminSchema);
