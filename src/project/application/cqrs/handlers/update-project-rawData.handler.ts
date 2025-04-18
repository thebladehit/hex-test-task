import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateProjectRawDataCommand } from '../commands/update-project-rawData.command';

@CommandHandler(UpdateProjectRawDataCommand)
export class UpdateProjectRawDataHandler implements ICommandHandler<UpdateProjectRawDataCommand> {
  constructor() {}

  async execute(command: UpdateProjectRawDataCommand): Promise<void> {
    const { id, rawData } = command;
    console.log('update', id);
  }
}