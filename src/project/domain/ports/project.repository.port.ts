import { Project } from '../models/project';
import { FilterParams } from '../types/filter-params';

export abstract class ProjectRepository {
  abstract create(project: Project): Promise<Project>;
  abstract update(project: Project): Promise<Project>;

  abstract findById(id: string): Promise<Project | null>;
  abstract findAllByFilter(params: FilterParams): Promise<Project[]>;
}