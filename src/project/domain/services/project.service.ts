import { ProjectRawData } from '../models/project-raw-data';
import { ProjectRepository } from '../ports/project.repository.port';
import { ProjectData } from '../models/project-data';
import { Project } from '../models/project';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  create(name: string, rawData: ProjectRawData): Promise<Project> {
    const project = new Project(
      null,
      name,
      rawData,
      this.process(rawData),
      null,
      null,
    );
    return this.projectRepository.create(project);
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