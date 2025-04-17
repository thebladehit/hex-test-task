import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { CreateProjectHandler } from './cqrs/handlers/create-project.handler';
import { UpdateProjectHandler } from './cqrs/handlers/update-project.handler';

@Module({
  controllers: [ProjectController],
  providers: [CreateProjectHandler, UpdateProjectHandler],
})
export class ProjectModule {
}
