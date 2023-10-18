import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})

export class SggstArticle {
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

    @Prop()
    participant: string

    @Prop()
    research: string

    @Prop()
    SEPractise: string
}

export class ModArticle {
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

    @Prop()
    participant: string

    @Prop()
    research: string

    @Prop()
    SEPractise: string
}

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

    @Prop()
    participant: string

    @Prop()
    research: string

    @Prop()
    SEPractise: string
}

export const SggstArticleSchema = SchemaFactory.createForClass(SggstArticle);
export const ModArticleSchema = SchemaFactory.createForClass(ModArticle);
export const ArticleSchema = SchemaFactory.createForClass(Article);
