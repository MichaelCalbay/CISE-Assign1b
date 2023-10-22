import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})

export class SuggestedArticle {
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

    @Prop()
    Decision: string
}

export class ModeratedArticle {
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

    @Prop()
    Decision: string
}

export class PublishedArticle {
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

    @Prop()
    Decision: string
}

export const SggstArticleSchema = SchemaFactory.createForClass(SuggestedArticle);
export const ModArticleSchema = SchemaFactory.createForClass(ModeratedArticle);
export const ArticleSchema = SchemaFactory.createForClass(PublishedArticle);
