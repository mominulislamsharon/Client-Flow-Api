import { Router } from "express";
import { ClientRoutes } from "../modules/client/client.route.js";


const router = Router();

router.use("/clients", ClientRoutes);

export default router;