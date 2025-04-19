export class GetProjectsFilterQuery {
  constructor(
    public readonly page: number,
    public readonly limit: number,
    public readonly name?: string,
    public readonly startDate?: string,
    public readonly endDate?: string,
  ) {}
}