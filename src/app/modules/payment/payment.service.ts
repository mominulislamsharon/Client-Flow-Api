import { IPayment } from "./payment.interface.js";
import { Payment } from "./payment.model.js";

const createPayment = (payload: IPayment) => {
  const result = Payment.create(payload);
  return result;
};

const getPaymentsByProject = (projectId: string) => {
  const result = Payment.find({
    project: projectId,
  }).populate({
    path: "project",
    populate: {
      path: "client",
    },
  });
  return result;
};

export const PaymentService = {
  createPayment,
  getPaymentsByProject,
};
