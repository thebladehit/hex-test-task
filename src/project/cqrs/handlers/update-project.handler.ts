import { UpdateProjectCommand } from '../commands/update-project.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateProjectCommand)
export class UpdateProjectHandler implements ICommandHandler<UpdateProjectCommand> {
  constructor() {
  }

  async execute(command: UpdateProjectCommand): Promise<void> {
    const { name, rawData } = command;
    console.log('update', name);
  }
}