import { Request, Response } from "express";
import { IClient } from "./client.interface.js";
import { ClientService } from "./client.service.js";

const createClient = async (req: Request, res: Response) => {
  const clientData = req.body as unknown as IClient;

  const result = await ClientService.createClient(clientData);

  (res as any).status(201).json({
    success: true,
    message: "Client created successfully",
    data: result,
  });
};

const getAllClients = async (req: Request, res: Response) => {
  const result = await ClientService.getAllClients();

  (res as any).status(200).json({
    success: true,
    message: "Clients retrieved successfully",
    data: result,
  });
};

const getSingleClient = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  const result = await ClientService.getSingleClient(id);
  (res as any).status(200).json({
    success: true,
    message: "Client retrieved successfully",
    data: result,
  });
};

export const ClientController = {
  createClient,
  getAllClients,
  getSingleClient,
};
