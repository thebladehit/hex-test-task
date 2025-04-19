import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RawData {
  @Field(type => Int)
  target: number;

  @Field(type => [Int])
  inputs: number[];
}