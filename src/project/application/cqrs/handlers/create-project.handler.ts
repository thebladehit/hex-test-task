import { CreateProjectCommand } from '../commands/create-project.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateProjectCommand)
export class CreateProjectHandler implements ICommandHandler<CreateProjectCommand> {
  constructor() {
  }

  async execute(command: CreateProjectCommand): Promise<void> {
    const { name, rawData } = command;
    console.log('create', name);
  }
}