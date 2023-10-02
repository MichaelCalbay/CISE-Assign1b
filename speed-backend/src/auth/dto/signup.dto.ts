import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    readonly firstname: string

    @IsNotEmpty()
    @IsString()
    readonly lastname: string

    @IsNotEmpty()
    @IsString()
    readonly role: string

    @IsNotEmpty()
    @IsEmail({}, { message: 'Please enter a correct email!'})
    readonly email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string

    @IsNotEmpty()
    @IsString()
    readonly gender: string
}