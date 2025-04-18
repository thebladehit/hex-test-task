export class CreateProjectCommand {
  constructor(
    public readonly name: string,
    public readonly rawData: Record<string, any>,
  ) {
  }
}