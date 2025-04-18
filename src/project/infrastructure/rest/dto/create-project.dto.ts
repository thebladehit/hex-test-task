import { IsNotEmpty, IsObject, IsString, ValidateNested } from 'class-validator';
import { RawDataDto } from './rawData.dto';
import { Type } from 'class-transformer';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => RawDataDto)
  rawData: RawDataDto;
}