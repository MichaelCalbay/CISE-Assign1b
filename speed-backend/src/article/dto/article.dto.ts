import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ArticleDto{
    @IsOptional()
    @IsString()
    readonly customId: number

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

    @IsOptional()
    @IsString()
    readonly claim: string

    @IsOptional()
    @IsString()
    readonly evidence: string

    @IsNotEmpty()
    @IsString()
    readonly participant: string

    @IsOptional()
    @IsString()
    readonly research: string

    @IsOptional()
    @IsString()
    readonly SEPractise: string

    @IsNotEmpty()
    @IsString()
    readonly decision: string

}