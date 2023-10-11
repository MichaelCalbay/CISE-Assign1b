import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
        const { 
            firstname,
            lastname,
            role,
            email,
            password,
            gender
        } = signUpDto

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.userModel.create({
            firstname,
            lastname,
            role,
            email,
            password: hashedPassword,
            gender,
        })

        const token = this.jwtService.sign({
            id: user._id,
        })

        return { token }
    }

    async login(loginDto: LoginDto): Promise<{ token: string}> {
        const {
            email,
            password,
        } = loginDto;

        const user = await this.userModel.findOne({ email })

        if(!user) {
            throw new UnauthorizedException('Invalid email');
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if(!isPasswordMatched) {
            throw new UnauthorizedException('Invalid password');
        }

        const token = this.jwtService.sign({
            id: user._id,
        })

        return { token }
    }

    async user(userDto: UserDto): Promise<{ token: string}> {
        const {
            firstname,
            lastname,
        } = userDto;

        const user = await this.userModel.findOne({ firstname, lastname })

        if(!user) {
            throw new UnauthorizedException('Person is not registered.');
        }

        const token = this.jwtService.sign({
            id: user._id,
        })

        return { token }
    }
}
