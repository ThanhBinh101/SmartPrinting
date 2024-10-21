import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ArgumentOutOfRangeError } from "rxjs";

@Schema()
export class student{
    @Prop()
    fullname: string;
    
    @Prop()
    username: string;
    
    @Prop()
    password: string;

    @Prop()
    stud_id: string;
    
    @Prop()
    email: string;

    @Prop()
    faculty: string;

    @Prop()
    age: number;

    @Prop()
    address: string;
}

export const userSchema = SchemaFactory.createForClass(student);