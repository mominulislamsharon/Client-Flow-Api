import express from "express";
import { ProjectController } from "./project.controller.js";

const router = express.Router();

router.post("/", ProjectController.createProject);
router.get("/", ProjectController.getAllProjects);
router.get("/:id", ProjectController.getSingleProject);

export const ProjectRoutes = router;