import { UpdateProjectNameCommand } from '../commands/update-project-name.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateProjectNameCommand)
export class UpdateProjectNameHandler implements ICommandHandler<UpdateProjectNameCommand> {
  constructor() {}

  async execute(command: UpdateProjectNameCommand): Promise<void> {
    const { id, name } = command;
    console.log('update', name);
  }
}