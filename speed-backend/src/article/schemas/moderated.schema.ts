import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class ModeratedArticles {
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
}

export const ModArticleSchema = SchemaFactory.createForClass(ModeratedArticles);
