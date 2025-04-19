import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Data {
  @Field()
  status: 'done' | 'invalid-input';

  @Field(type => [Int], { nullable: true })
  data?: number[];
}