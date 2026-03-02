import express from 'express';
import { ClientController } from './client.controller.js';

const router = express.Router();

router.post("/", ClientController.createClient);
router.get("/", ClientController.getAllClients);
router.get("/:id", ClientController.getSingleClient);

export const ClientRoutes = router;