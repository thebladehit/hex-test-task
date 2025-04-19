import { Body, Controller, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateProjectCommand } from '../cqrs/commands/create/create-project.command';
import { UpdateProjectNameCommand } from '../cqrs/commands/update/update-project-name.command';
import { UpdateProjectRawDataCommand } from '../cqrs/commands/update/update-project-rawData.command';
import { UpdateProjectNameDto } from './dto/update-project-name.dto';
import { UpdateProjectRawDataDto } from './dto/update-project-rawData.dto';

@Controller('projects')
export class ProjectController {
  constructor(
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  createProject(@Body() dto: CreateProjectDto) {
    return this.commandBus.execute(new CreateProjectCommand(dto.name, dto.rawData));
  }

  @Patch('/:id/name')
  updateProjectName(@Param('id', new ParseUUIDPipe()) id: string, @Body() dto: UpdateProjectNameDto) {
    return this.commandBus.execute(new UpdateProjectNameCommand(id, dto.name!));
  }

  @Patch('/:id/rawData')
  updateProjectRawData(@Param('id', new ParseUUIDPipe()) id: string, @Body() dto: UpdateProjectRawDataDto) {
    return this.commandBus.execute(new UpdateProjectRawDataCommand(id, dto.rawData!));
  }
}
