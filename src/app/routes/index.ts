import { Router } from "express";
import { ClientRoutes } from "../modules/client/client.route.js";
import { ProjectRoutes } from "../modules/project/project.route.js";
import { TaskRoutes } from "../modules/task/task.route.js";

const router = Router();

router.use("/clients", ClientRoutes);
router.use("/projects", ProjectRoutes);
router.use("/tasks", TaskRoutes);

export default router;
