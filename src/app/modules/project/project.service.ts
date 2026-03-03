import { IProject } from "./project.interface.js";
import { Project } from "./project.model.js";

const createProject = async (payload: IProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProjects = async (status?: string) => {
  const filter: any = {};

  if (status) {
    filter.status = status;
  }

  const result = await Project.find(filter).populate("client");
  return result;
};

const getSingleProject = async (id: string) => {
  const result = await Project.findById(id).populate("client");
  return result;
}

export const ProjectService = {
  createProject,
  getAllProjects,
  getSingleProject,
}
