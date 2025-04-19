import { IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { RawDataDto } from './rawData.dto';

export class UpdateProjectRawDataDto {
  @IsObject()
  @ValidateNested()
  @Type(() => RawDataDto)
  rawData: RawDataDto;
}