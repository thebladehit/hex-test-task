import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class ProjectFilterInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  startDate?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  endDate?: string;
}