import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true,
})

export class User {
    @Prop()
    firstname: string
    
    @Prop()
    lastname: string

    @Prop()
    role: string

    @Prop({ unique: [true, 'Duplicate email entered']})
    email: string
    
    @Prop()
    password: string

    @Prop()
    gender: string
}

export const UserSchema = SchemaFactory.createForClass(User);