import { Request, Response } from "express";
import { IClient } from "./client.interface.js";
import { ClientService } from "./client.service.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";

const createClient = catchAsync(async (req: Request, res: Response) => {
  const clientData = req.body as unknown as IClient;

  const result = await ClientService.createClient(clientData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Client created successfully",
    data: result,
  });
});

const getAllClients = catchAsync(async (req, res) => {
  const result = await ClientService.getAllClients();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Clients retrieved successfully",
    data: result,
  });
});

const getSingleClient = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ClientService.getSingleClient(id as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Client retrieved successfully",
    data: result,
  });
});

export const ClientController = {
  createClient,
  getAllClients,
  getSingleClient,
};
