import { ArrayNotEmpty, IsArray, IsNumber, Min } from 'class-validator';

export class RawDataDto {
  @IsNumber()
  @Min(1)
  target: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  inputs: number[];
}