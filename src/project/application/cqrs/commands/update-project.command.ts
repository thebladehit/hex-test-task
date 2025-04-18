export class UpdateProjectCommand {
  constructor(
    public readonly id: string,
    public readonly name?: string,
    public readonly rawData?: Record<string, any>,
  ) {
  }
}