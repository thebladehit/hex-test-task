import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';

@InputType()
export class ProjectPaginationInput {
  @Field(type => Int, { defaultValue: 0 })
  @IsInt()
  @Min(0)
  page: number;

  @Field(type => Int, { defaultValue: 10 })
  @IsInt()
  @Min(0)
  limit: number;
}