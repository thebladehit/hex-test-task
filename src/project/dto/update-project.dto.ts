import { IsDefined, IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateProjectDto {
  @IsDefined()
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsObject()
  @IsOptional()
  rawData?: Record<string, any>;
}