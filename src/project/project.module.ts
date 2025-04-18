import { Module } from '@nestjs/common';
import { ProjectController } from './infrastructure/rest/project.controller';
import { CreateProjectHandler } from './application/cqrs/handlers/create-project.handler';
import { UpdateProjectHandler } from './application/cqrs/handlers/update-project.handler';

@Module({
  controllers: [ProjectController],
  providers: [CreateProjectHandler, UpdateProjectHandler],
})
export class ProjectModule {
}
