import { Project } from './models/project.model';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { QueryBus } from '@nestjs/cqrs';
import { ProjectFilterInput } from './dto/project-filter.input';
import { ProjectPaginationInput } from './dto/project-pagination.input';
import { GetProjectsFilterQuery } from '../../application/cqrs/queries/get-projects-filter.query';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query(() => [Project])
  projects(
    @Args('filter', { nullable: true }) filter: ProjectFilterInput,
    @Args('pagination') pagination: ProjectPaginationInput,
  ): Promise<[Project]> {
    const { page, limit } = pagination;
    const { name, startDate, endDate } = filter;

    return this.queryBus.execute(new GetProjectsFilterQuery(
      page,
      limit,
      name,
      startDate,
      endDate,
    ));
  }
}