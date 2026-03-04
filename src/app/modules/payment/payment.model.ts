import { model, Schema } from "mongoose";
import { IPayment } from "./payment.interface.js";

const paymentSchema = new Schema<IPayment>(
  {
    project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["unpaid", "paid", "partial"],
      default: "unpaid",
    },
    paymentDate: { type: Date },
    method: { type: String },
  },
  {
    timestamps: true,
  },
);

export const Payment = model<IPayment>("Payment", paymentSchema);
