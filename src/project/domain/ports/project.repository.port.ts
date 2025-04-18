import { Project } from '../models/project';
import { ProjectRawData } from '../models/project-raw-data';

export abstract class ProjectRepository {
  abstract create(project: Project): Promise<Project>;
  abstract updateName(id: string, name: string): Promise<Project>;
  abstract updateRawData(id: string, rawData: ProjectRawData): Promise<Project>;
}