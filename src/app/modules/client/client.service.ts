import { IClient } from "./client.interface.js";
import { Client } from "./client.model.js";


const createClient = async(payload: IClient) => {
  const result = await Client.create(payload);
  return result;
}

const getAllClients = async() => {
  const result = await Client.find();
  return result;
}

const getSingleClient = async(id: string) => {
  const result = await Client.findById(id);
  return result;
}

export const ClientService = {
  createClient,
  getAllClients,
  getSingleClient,
}