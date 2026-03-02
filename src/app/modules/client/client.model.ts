import { model, Schema } from "mongoose";
import { IClient } from "./client.interface.js";

const clientSchema = new Schema<IClient>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    company: { type: String },
  },
  {
    timestamps: true,
  },
);


export const Client = model<IClient>("Client", clientSchema);