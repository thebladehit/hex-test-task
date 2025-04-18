export class ProjectData {
  constructor(
    public status: 'done' | 'invalid-input',
    public data?: number[]
  ) {}
}