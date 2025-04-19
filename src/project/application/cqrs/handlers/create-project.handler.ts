import { CreateProjectCommand } from '../commands/create/create-project.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ProjectService } from '../../../domain/services/project.service';
import { Project } from '../../../domain/models/project';

@CommandHandler(CreateProjectCommand)
export class CreateProjectHandler implements ICommandHandler<CreateProjectCommand> {
  constructor(private readonly projectService: ProjectService) {}

  execute({ name, rawData }: CreateProjectCommand): Promise<Project> {
    return this.projectService.create(name, rawData);
  }
}