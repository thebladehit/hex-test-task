import { Project } from '../models/project';
import { ProjectRawData } from '../models/project-raw-data';

export abstract class ProjectRepository {
  abstract create(project: Project): Promise<Project>;
  abstract update(project: Project): Promise<Project>;

  abstract findById(id: string): Promise<Project | null>;
}