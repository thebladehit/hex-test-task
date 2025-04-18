import { ProjectRawData } from '../models/project-raw-data';
import { ProjectRepository } from '../ports/project.repository.port';
import { ProjectData } from '../models/project-data';
import { Project } from '../models/project';
import { Injectable } from '@nestjs/common';
import { ProjectNotFoundException } from '../errors/project-not-found.exception';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  create(name: string, rawData: ProjectRawData): Promise<Project> {
    const project =
      new Project(null, name, rawData, this.process(rawData), null, null);
    return this.projectRepository.create(project);
  }

  async updateName(id: string, name: string): Promise<Project> {
    const project = await this.projectRepository.findById(id);
    if (!project) {
      throw new ProjectNotFoundException(id);
    }
    project.name = name;
    return this.projectRepository.update(project);
  }

  async updateRawData(id: string, rawData: ProjectRawData): Promise<Project> {
    const project = await this.projectRepository.findById(id);
    if (!project) {
      throw new ProjectNotFoundException(id);
    }
    project.rawData = rawData;
    project.data = this.process(rawData);
    return this.projectRepository.update(project);
  }

  private process({ target, inputs }: ProjectRawData): ProjectData {
    const result = this.findSumSubnet(target, inputs);
    if (result) {
      return new ProjectData('done', result);
    }
    return new ProjectData('invalid-input');
  }

  private findSumSubnet(target: number, inputs: number[]): number[] {
    // do some logic
    return inputs;
  }
}