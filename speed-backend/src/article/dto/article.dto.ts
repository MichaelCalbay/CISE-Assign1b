import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ArticleDto{
    @IsNotEmpty()
    @IsString()
    readonly title: string

    @IsNotEmpty()
    @IsString()
    readonly authors: string[]

    @IsNotEmpty()
    @IsString()
    readonly source: string

    @IsNotEmpty()
    @IsNumber()
    readonly pubyear: number

    @IsNotEmpty()
    @IsString()
    readonly doi: string

    @IsNotEmpty()
    @IsString()
    readonly claim: string

    @IsNotEmpty()
    @IsString()
    readonly evidence: string

    @IsNotEmpty()
    @IsString()
    readonly participant: string

    @IsNotEmpty()
    @IsString()
    readonly research: string

    @IsNotEmpty()
    @IsString()
    readonly SEPractise: string

    @IsNotEmpty()
    @IsString()
    readonly decision: string

}