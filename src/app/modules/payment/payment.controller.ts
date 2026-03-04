import { Request, Response } from "express";
import { PaymentService } from "./payment.service.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";

const createPayment = catchAsync(async (req, res) => {
  const result = await PaymentService.createPayment(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Payment created successfully",
    data: result,
  });
});

const getPaymentsByProject = catchAsync(async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const result = await PaymentService.getPaymentsByProject(projectId as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Payments retrieved successfully",
    data: result,
  });
});

export const PaymentController = {
  createPayment,
  getPaymentsByProject,
};
