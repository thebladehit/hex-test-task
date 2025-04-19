import { UpdateProjectNameCommand } from '../../commands/update/update-project-name.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ProjectService } from '../../../../domain/services/project.service';
import { ProjectNotFoundException } from '../../../../domain/errors/project-not-found.exception';
import { NotFoundException } from '@nestjs/common';
import { Project } from '../../../../domain/models/project';

@CommandHandler(UpdateProjectNameCommand)
export class UpdateProjectNameHandler implements ICommandHandler<UpdateProjectNameCommand> {
  constructor(private readonly  projectService: ProjectService) {}

  async execute({ id, name }: UpdateProjectNameCommand): Promise<Project> {
    try {
      return await this.projectService.updateName(id, name);
    } catch (err) {
      if (err instanceof ProjectNotFoundException) {
        throw new NotFoundException(err.message);
      }
      throw err;
    }
  }
}