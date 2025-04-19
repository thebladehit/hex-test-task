export class UpdateProjectNameCommand {
  constructor(
    public readonly id: string,
    public readonly name: string,
  ) {}
}