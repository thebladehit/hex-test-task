import { Module } from '@nestjs/common';
import { ProjectController } from './infrastructure/rest/project.controller';
import { CreateProjectHandler } from './application/cqrs/handlers/create-project.handler';
import { UpdateProjectNameHandler } from './application/cqrs/handlers/update-project-name.handler';
import { UpdateProjectRawDataHandler } from './application/cqrs/handlers/update-project-rawData.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './infrastructure/persistence/typeorm/project.entities';
import { ProjectRepository } from './domain/ports/project.repository.port';
import { ProjectRepositoryImpl } from './infrastructure/persistence/typeorm/project.repositoryImpl';
import { ProjectService } from './domain/services/project.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectController],
  providers: [
    CreateProjectHandler,
    UpdateProjectNameHandler,
    UpdateProjectRawDataHandler,
    ProjectService,
    {
      provide: ProjectRepository,
      useClass: ProjectRepositoryImpl,
    },
  ],
})
export class ProjectModule {}
