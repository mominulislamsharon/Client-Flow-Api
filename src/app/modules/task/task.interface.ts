import { Types } from "mongoose";

export interface ITask {
    title: string;
    project: Types.ObjectId; //ref
    assignedTo?: string;
    status: "todo" | "doigng" | "done";
    priority: "low" | "medium" | "high";
}
