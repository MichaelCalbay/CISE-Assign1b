import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})

export class Article {
    @Prop()
    title: string

    @Prop([String])
    authors: string[]

    @Prop()
    source: string

    @Prop()
    pubyear: number

    @Prop()
    doi: string

    @Prop()
    claim: string

    @Prop()
    evidence: string
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
