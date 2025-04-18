import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class RawDataDto {
  @IsNumber()
  @Min(1)
  target: number;

  @IsArray()
  @IsNotEmpty()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  inputs: number[];
}