import {
  ProjectRepository
} from '../../../domain/ports/project.repository.port';
import { ProjectRawData } from '../../../domain/models/project-raw-data';
import { Project } from '../../../domain/models/project';
import { Project as ProjectTypeOrmEntity } from './project.entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectData } from '../../../domain/models/project-data';

@Injectable()
export class ProjectRepositoryImpl implements ProjectRepository {
  constructor(
    @InjectRepository(ProjectTypeOrmEntity)
    private readonly projectRepository: Repository<ProjectTypeOrmEntity>,
  ) {}

  async create(project: Project): Promise<Project> {
    const ormEntity = new ProjectTypeOrmEntity();
    ormEntity.name = project.name;
    ormEntity.rawData = project.rawData;
    ormEntity.data = project.data!;

    const saved = await this.projectRepository.save(ormEntity);
    return new Project(
      saved.id,
      saved.name,
      saved.rawData as ProjectRawData,
      saved.data as ProjectData,
      saved.createdAt,
      saved.createdAt,
    );
  }

  updateName(id: string, name: string): Promise<Project> {
    return Promise.resolve(new Project(id, name, {} as ProjectRawData, {} as ProjectData, null, null)); /// stub
  }

  updateRawData(id: string, rawData: ProjectRawData): Promise<Project> {
    return Promise.resolve(new Project(id, 'ff', {} as ProjectRawData, {} as ProjectData, null, null)); /// stub
  }
}