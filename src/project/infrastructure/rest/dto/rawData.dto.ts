import { IsArray, IsNumber, Min } from 'class-validator';

export class RawDataDto {
  @IsNumber()
  @Min(1)
  target: number;

  @IsArray()
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  inputs: number[];
}