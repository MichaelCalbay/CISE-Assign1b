import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})

export class SuggestedArticles {
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
  participant: string;
};

export const SggstArticleSchema =
  SchemaFactory.createForClass(SuggestedArticles);