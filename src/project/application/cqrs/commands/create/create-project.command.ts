import { ProjectRawData } from '../../../../domain/models/project-raw-data';

export class CreateProjectCommand {
  constructor(
    public readonly name: string,
    public readonly rawData: ProjectRawData,
  ) {}
}