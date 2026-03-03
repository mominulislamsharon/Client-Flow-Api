import { model, Schema } from "mongoose";
import { IProject } from "./project.interface.js";

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String },
    client: { type: Schema.Types.ObjectId, ref: "Client", required: true },
    deadline: { type: Date },
    status: {
      type: String,
      enum: ["ongoing", "completed", "paused"],
      default: "ongoing",
    },
    budget: { type: Number },
  },
  {
    timestamps: true,
  },
);

export const Project = model<IProject>("Project", projectSchema);
