import { ProjectRawData } from '../../../../domain/models/project-raw-data';

export class UpdateProjectRawDataCommand {
  constructor(
    public readonly id: string,
    public readonly rawData: ProjectRawData,
  ) {}
}