import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { RawData } from './rawData.model';
import { Data } from './data.model';

@ObjectType()
export class Project {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(type => RawData)
  rawData: RawData;

  @Field(type => Data)
  data: Data;

  @Field(type => GraphQLISODateTime)
  createdAt: Date;

  @Field(type => GraphQLISODateTime)
  updatedAt: Date;
}