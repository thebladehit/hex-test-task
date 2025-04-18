import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProjectCommand } from '../../application/cqrs/commands/create-project.command';
import { UpdateProjectCommand } from '../../application/cqrs/commands/update-project.command';

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
  updateProject(@Param('id') id: string, @Body() dto: Partial<CreateProjectDto>) {
    return this.commandBus.execute(new UpdateProjectCommand(id, dto.name, dto.rawData));
  }
}
