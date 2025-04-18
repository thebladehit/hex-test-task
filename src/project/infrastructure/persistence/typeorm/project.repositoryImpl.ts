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
    return this.fromEntity(saved);
  }

  async update(project: Project): Promise<Project> {
    const ormEntity = this.toEntity(project);
    const updated = await this.projectRepository.save(ormEntity);
    return this.fromEntity(updated);
  }

  async findById(id: string): Promise<Project | null> {
    const ormEntity = await this.projectRepository.findOne({
      where: { id },
    });
    if (!ormEntity) {
      return null;
    }
    return this.fromEntity(ormEntity);
  }

  private fromEntity(ormProject: ProjectTypeOrmEntity): Project {
    return new Project(
      ormProject.id,
      ormProject.name,
      ormProject.rawData as ProjectRawData,
      ormProject.data as ProjectData,
      ormProject.createdAt,
      ormProject.updatedAt,
    );
  }

  private toEntity(project: Project): ProjectTypeOrmEntity {
    const ormEntity = new ProjectTypeOrmEntity();
    ormEntity.id = project.id!;
    ormEntity.name = project.name;
    ormEntity.rawData = project.rawData!;
    ormEntity.data = project.data!;
    return ormEntity;
  }
}