import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})

export class ModeratedArticles {
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
    decision: string
}

export const ModArticleSchema = SchemaFactory.createForClass(ModeratedArticles);

