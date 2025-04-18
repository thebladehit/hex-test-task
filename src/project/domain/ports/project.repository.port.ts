import { Project } from '../models/project';
import { ProjectRawData } from '../models/project-raw-data';

export abstract class ProjectRepository {
  abstract create(project: Project): Promise<Project>;
  abstract updateName(project: Project): Promise<Project>;
  abstract updateRawData(id: string, rawData: ProjectRawData): Promise<Project>;

  abstract findById(id: string): Promise<Project | null>;
}