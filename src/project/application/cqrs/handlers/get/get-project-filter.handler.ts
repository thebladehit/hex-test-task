import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProjectsFilterQuery } from '../../queries/get-projects-filter.query';
import { ProjectService } from '../../../../domain/services/project.service';
import { Project } from '../../../../domain/models/project';

@QueryHandler(GetProjectsFilterQuery)
export class GetProjectFilterHandler implements IQueryHandler<GetProjectsFilterQuery> {
  constructor(private readonly projectService: ProjectService) {}

  execute(query: GetProjectsFilterQuery): Promise<Project[]> {
    return this.projectService.getAllByFilter(query);
  }
}