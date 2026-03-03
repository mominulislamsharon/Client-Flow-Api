import { model, Schema } from "mongoose";
import { ITask } from "./task.interface.js";

const TaskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    assignedTo: { type: String },
    status: {
      type: String,
      enum: ["todo", "doigng", "done"],
      default: "todo",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
  },
  {
    timestamps: true,
  },
);

export const Task = model<ITask>("Task", TaskSchema);