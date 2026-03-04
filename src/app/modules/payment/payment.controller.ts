import { Request, Response } from "express";
import { PaymentService } from "./payment.service.js";

const createPayment = async (req: Request, res: Response) => {
  const result = await PaymentService.createPayment(req.body);
  res.status(201).json({
    success: true,
    data: result,
  });
};

const getPaymentsByProject = async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const result = await PaymentService.getPaymentsByProject(projectId as string);
  res.status(200).json({
    success: true,
    data: result,
  });
};

export const PaymentController = {
  createPayment,
  getPaymentsByProject,
};
