import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateProjectRawDataCommand } from '../commands/update/update-project-rawData.command';
import { Project } from '../../../domain/models/project';
import { ProjectNotFoundException } from '../../../domain/errors/project-not-found.exception';
import { NotFoundException } from '@nestjs/common';
import { ProjectService } from '../../../domain/services/project.service';

@CommandHandler(UpdateProjectRawDataCommand)
export class UpdateProjectRawDataHandler implements ICommandHandler<UpdateProjectRawDataCommand> {
  constructor(private readonly  projectService: ProjectService) {}

  async execute({ id, rawData }: UpdateProjectRawDataCommand): Promise<Project> {
    try {
      return await this.projectService.updateRawData(id, rawData);
    } catch (err) {
      if (err instanceof ProjectNotFoundException) {
        throw new NotFoundException(err.message);
      }
      throw err;
    }
  }
}