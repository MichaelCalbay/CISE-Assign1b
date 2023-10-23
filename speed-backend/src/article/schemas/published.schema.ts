import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class PublishedArticles {
  @Prop()
  customId: number;
  
  @Prop()
  title: string;

  @Prop([String])
  authors: string[];

  @Prop()
  source: string;

  @Prop()
  pubyear: number;

  @Prop()
  doi: string;

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
