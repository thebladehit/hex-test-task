import { ProjectRawData } from '../models/project-raw-data';
import { ProjectRepository } from '../ports/project.repository.port';
import { ProjectData } from '../models/project-data';
import { Project } from '../models/project';
import { Injectable } from '@nestjs/common';
import { ProjectNotFoundException } from '../errors/project-not-found.exception';
import { FilterParams } from '../types/filter-params';

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

  getAllByFilter(params: FilterParams): Promise<Project[]> {
    return this.projectRepository.findAllByFilter(params);
  }

  private process({ target, inputs }: ProjectRawData): ProjectData {
    const result = this.findSumSubnet(target, inputs);
    if (result.length !== 0) {
      return new ProjectData('done', result);
    }
    return new ProjectData('invalid-input');
  }

  private findSumSubnet(target: number, inputs: number[]): number[] {
    let res: number[] = [];

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] === target) {
        res.push(inputs[i]);
        break;
      }

      let sum = inputs[i];
      res.push(inputs[i]);

      const lastIdxs: number[] = [];
      let nextIdx = i + 1;

      while (inputs[nextIdx]) {
        if (sum + inputs[nextIdx] === target) {
          return [...res, inputs[nextIdx]];
        }

        if (sum + inputs[nextIdx] < target) {
          sum += inputs[nextIdx];
          res.push(inputs[nextIdx]);
          lastIdxs.push(nextIdx);
        }

        nextIdx++;

        if (!inputs[nextIdx]) {
          do {
            const lastIdx = lastIdxs.pop();
            if (lastIdx === undefined) {
              break;
            }
            sum -= inputs[lastIdx];
            res.pop();
            nextIdx = lastIdx + 1;
          } while (!inputs[nextIdx])
        }
      }

      res = [];
    }
    return res;
  }
}