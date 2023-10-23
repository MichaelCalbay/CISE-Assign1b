import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class PublishedArticles {
  @Prop()
  title: string;

  @Prop([String])
  authors: string[];

  @Prop()
  source: string;

  @Prop()
  pubyear: number;

  @Prop()
  claim: string;

  @Prop()
  evidence: string;

  @Prop()
  research: string;

  @Prop()
  SEPractise: string;
}

export const PublishedArticleSchema =
  SchemaFactory.createForClass(PublishedArticles);
