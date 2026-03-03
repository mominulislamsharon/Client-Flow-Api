import { Types } from "mongoose";

export interface IProject {
    title: string;
    description: string;
    client: Types.ObjectId;
    deadline?: Date;
    status: "ongoing" | "completed" | "paused";
    budget?: number;
}