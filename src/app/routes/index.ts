import { Router } from "express";
import { ClientRoutes } from "../modules/client/client.route.js";
import { ProjectRoutes } from "../modules/project/project.route.js";


const router = Router();

router.use("/clients", ClientRoutes);
router.use("/projects", ProjectRoutes);

export default router;