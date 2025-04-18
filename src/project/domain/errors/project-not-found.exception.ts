export class ProjectNotFoundException extends Error {
  constructor(id: string) {
    super(`Project with ID ${id} not found.`);
    this.name = 'ProjectNotFoundException';
  }
}