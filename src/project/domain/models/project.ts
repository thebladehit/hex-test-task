import { ProjectRawData } from './project-raw-data';
import { ProjectData } from './project-data';

export class Project {
  constructor(
    public id: string | null,
    public name: string,
    public rawData: ProjectRawData,
    public data: ProjectData,
    public createdAt: Date | null,
    public updatedAt: Date | null,
  ) {}
}