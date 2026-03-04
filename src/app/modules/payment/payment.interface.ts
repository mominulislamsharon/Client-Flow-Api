import { Types } from "mongoose";

export interface IPayment {
  project: Types.ObjectId;
  amount: number;
  status: "unpaid" | "paid" | "partial";
  paymentDate?: Date;
  method?: string;
}
