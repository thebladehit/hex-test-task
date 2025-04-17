import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProjectCommand } from './cqrs/commands/create-project.command';
import { UpdateProjectCommand } from './cqrs/commands/update-project.command';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {
  }

  @Post()
  createProject(@Body() dto: CreateProjectDto) {
    return this.commandBus.execute(new CreateProjectCommand(dto.name, dto.rawData));
  }

  @Patch('/:id')
  updateProject(@Body() dto: UpdateProjectDto) {
    return this.commandBus.execute(new UpdateProjectCommand(dto.id, dto.name, dto.rawData));
  }
}
