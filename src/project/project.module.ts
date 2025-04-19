import { Module } from '@nestjs/common';
import { ProjectController } from './api/rest/project.controller';
import { CreateProjectHandler } from './application/cqrs/handlers/create/create-project.handler';
import { UpdateProjectNameHandler } from './application/cqrs/handlers/update/update-project-name.handler';
import { UpdateProjectRawDataHandler } from './application/cqrs/handlers/update/update-project-rawData.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './infrastructure/persistence/typeorm/project.entities';
import { ProjectRepository } from './domain/ports/project.repository.port';
import { ProjectRepositoryImpl } from './infrastructure/persistence/typeorm/project.repositoryImpl';
import { ProjectService } from './domain/services/project.service';
import { GetProjectFilterHandler } from './application/cqrs/handlers/get/get-project-filter.handler';
import { ProjectResolver } from './api/graphql/project.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectController],
  providers: [
    CreateProjectHandler,
    UpdateProjectNameHandler,
    UpdateProjectRawDataHandler,
    GetProjectFilterHandler,
    ProjectService,
    ProjectResolver,
    {
      provide: ProjectRepository,
      useClass: ProjectRepositoryImpl,
    },
  ],
})
export class ProjectModule {}
